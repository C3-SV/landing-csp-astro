import { useEffect, useMemo, useState } from "react";
import { genUploader } from "uploadthing/client";

import { buildRegistrationEmailPayload } from "@/lib/email-preview";
import { createRegistration } from "@/lib/firebase-registrations";
import {
  DISCOVERY_SOURCE_OPTIONS,
  SCHOOL_RESPONSIBLE_ROLES,
} from "@/lib/constants";
import type {
  FieldErrors,
  RegistrationCategory,
  RegistrationFormData,
  Responsible,
  TeamMember,
  UploadedFileMetadata,
} from "@/lib/types";
import { cn, formatPersonName } from "@/lib/utils";
import {
  getStepKeysByCategory,
  validateAllSteps,
  validateStepByKey,
} from "@/lib/validation";
import type { RegistrationStepKey } from "@/lib/validation";

type RegistrationFormProps = {
  category: RegistrationCategory;
};

type SubmitStatus = "idle" | "saving" | "success";

const DRAFT_VERSION = 3;
const DRAFT_KEY = "csp-registration-draft";
const STEP_LABELS: Record<RegistrationStepKey, string> = {
  team: "Equipo",
  members: "Integrantes",
  responsible: "Responsable",
  confirmation: "Confirmación",
};

function createEmptyMember(id: string): TeamMember {
  return {
    id,
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    whatsapp: "",
    career: "",
    universityYear: "",
    schoolGrade: "",
    about: "",
    linkedin: "",
    studentIdFile: null,
  };
}

function createInitialFormData(category: RegistrationCategory): RegistrationFormData {
  return {
    teamSize: 3,
    category,
    teamName: "",
    institution: "",
    discoverySource: "",
    discoverySourceOther: "",
    teamDescription: "",
    teamOmegaUpUser: "",
    contactEmail: "",
    members: [
      createEmptyMember("member-1"),
      createEmptyMember("member-2"),
      createEmptyMember("member-3"),
    ],
    responsible: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      institution: "",
      role: "",
      relationship: "",
      comments: "",
    },
    universityImageConsentAccepted: false,
    schoolImageConsentFiles: [],
    dataReviewAccepted: false,
    privacyAccepted: false,
    status: "recibida",
    adminNotes: "",
  };
}

function sanitizeDraft(formData: RegistrationFormData) {
  return {
    version: DRAFT_VERSION,
    ...formData,
  };
}

function parseDraft(rawDraft: string, category: RegistrationCategory): RegistrationFormData | null {
  try {
    const parsed = JSON.parse(rawDraft) as Partial<RegistrationFormData> & {
      version?: number;
      category?: RegistrationCategory;
    };
    if (parsed.version !== DRAFT_VERSION || parsed.category !== category) return null;

    const initial = createInitialFormData(category);
    const mergedMembers = (parsed.members ?? initial.members).map((member, index) => ({
      ...initial.members[index],
      ...member,
      studentIdFile:
        member.studentIdFile && typeof member.studentIdFile === "object"
          ? (member.studentIdFile as UploadedFileMetadata)
          : null,
    })) as RegistrationFormData["members"];

    return {
      ...initial,
      ...parsed,
      category,
      members: mergedMembers,
      schoolImageConsentFiles: Array.isArray(parsed.schoolImageConsentFiles)
        ? parsed.schoolImageConsentFiles
        : [],
      responsible: {
        ...initial.responsible,
        ...(parsed.responsible ?? {}),
      },
    };
  } catch {
    return null;
  }
}

type UploadFieldProps = {
  endpoint: "studentIdUploader" | "consentUploader";
  value?: UploadedFileMetadata | UploadedFileMetadata[] | null;
  multiple?: boolean;
  label: string;
  description?: string;
  error?: string;
  onChange: (files: UploadedFileMetadata | File | UploadedFileMetadata[] | null) => void;
  onError?: (message: string) => void;
  onUploadingChange?: (uploading: boolean) => void;
};

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

const uploadThing = genUploader({
  url: "/api/uploadthing",
  package: "uploadthing",
});

function getConsentFileList(value: RegistrationFormData["schoolImageConsentFiles"]) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function UploadField({
  endpoint,
  value = null,
  multiple: _multiple,
  label,
  description,
  error,
  onChange,
  onError,
  onUploadingChange: _onUploadingChange,
}: UploadFieldProps) {
  const [localFile, setLocalFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [localError, setLocalError] = useState("");
  const maxBytes = endpoint === "studentIdUploader" ? 2 * 1024 * 1024 : 3 * 1024 * 1024;

  const files = useMemo(() => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return [value];
  }, [value]);

  const hasFiles = files.length > 0;
  const selectedLabel =
    files.length === 1
      ? `Archivo seleccionado: ${files[0].fileName}`
      : `${files.length} archivos seleccionados y cargados.`;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalError("");
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.size > maxBytes) {
      const maxLabel = endpoint === "studentIdUploader" ? "2MB" : "3MB";
      const message = `El archivo "${selectedFile.name}" supera el límite de ${maxLabel}.`;
      setLocalError(message);
      onError?.(message);
      return;
    }

    setLocalFile(selectedFile);
    // Store the File temporarily in formData until it's uploaded
    onChange(selectedFile as any);

    if (selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <label className="text-sm font-medium text-csp-black">{label}</label>
      </div>

      <p className="text-xs text-csp-black/70">
        {description ?? "Adjunta el comprobante o archivo solicitado."}
      </p>

      {!hasFiles && !localFile ? (
        <p className="text-xs text-csp-black/70">
          Selecciona un archivo desde tu dispositivo. Se mostrará una vista previa.
        </p>
      ) : null}

      {hasFiles && !localFile ? (
        <div className="rounded-md border border-csp-accent/40 bg-csp-white p-2 text-xs text-csp-black/80">
          <p className="font-medium text-csp-primary">{selectedLabel}</p>
          <p className="mt-1">Archivo cargado correctamente. Si lo necesitas, puedes cambiarlo.</p>
        </div>
      ) : null}

      {/* Preview Section */}
      {preview && localFile ? (
        <div className="rounded-md border border-csp-primary/30 overflow-hidden bg-white p-2 space-y-2">
          <img
            src={preview}
            alt={localFile.name}
            className="w-full h-40 object-cover rounded"
          />
          <div className="text-xs space-y-1">
            <p className="font-medium text-csp-primary">{localFile.name}</p>
            <p className="text-csp-black/60">{formatBytes(localFile.size)}</p>
          </div>
        </div>
      ) : null}

      {/* File Input */}
      <div
        className={cn(
          "rounded-md border-2 border-dashed border-csp-neutral/70 bg-csp-soft p-4",
          "focus-within:border-csp-blue",
          (error || localError) && "border-csp-error",
          (localFile || hasFiles) && "border-csp-accent/70",
        )}
      >
        <label className="flex flex-col items-center justify-center cursor-pointer gap-3">
          <div className="text-center">
            <p className="text-csp-black font-medium text-sm">Arrastra o selecciona el archivo</p>
            <p className="text-xs text-csp-black/70 mt-1">
              {endpoint === "studentIdUploader" ? "PDF, PNG, JPG/JPEG - máximo 2MB" : "PDF, PNG, JPG/JPEG - máximo 3MB"}
            </p>
          </div>
          <input
            type="file"
            onChange={handleFileSelect}
            accept={endpoint === "studentIdUploader" ? ".pdf,.png,.jpg,.jpeg" : ".pdf,.png,.jpg,.jpeg"}
            className="hidden"
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              const input = (e.currentTarget.closest("label") as HTMLLabelElement)?.querySelector(
                'input[type="file"]'
              ) as HTMLInputElement;
              input?.click();
            }}
            className="bg-csp-blue text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-csp-primary transition"
          >
            {localFile || hasFiles ? "Cambiar archivo" : "Seleccionar archivo"}
          </button>
        </label>
      </div>

      {localError ? (
        <p className="form-error flex items-start gap-1">
          <span aria-hidden="true" className="font-semibold">!</span>
          <span>{localError}</span>
        </p>
      ) : null}
      {error ? (
        <p className="form-error flex items-start gap-1">
          <span aria-hidden="true" className="font-semibold">!</span>
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <p className="form-error flex items-start gap-1">
      <span aria-hidden="true" className="font-semibold">
        !
      </span>
      <span>{error}</span>
    </p>
  );
}

function TextInput({
  label,
  error,
  className,
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }) {
  const errorId = error && id ? `${id}-error` : undefined;
  const describedBy = [props["aria-describedby"], errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="space-y-1">
      {label ? (
        <label className="text-sm font-medium text-csp-black" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        className={cn(
          "h-11 w-full rounded-md border border-csp-neutral/70 bg-csp-white px-3 text-sm text-csp-black outline-none transition focus:border-csp-blue focus:ring-2 focus:ring-csp-blue/25",
          error && "border-csp-error focus:border-csp-error focus:ring-csp-error/20",
          className,
        )}
        aria-describedby={describedBy}
        aria-invalid={error ? "true" : undefined}
        id={id}
        {...props}
      />
      <FieldError error={error} />
    </div>
  );
}

function TextAreaInput({
  label,
  error,
  className,
  id,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string }) {
  const errorId = error && id ? `${id}-error` : undefined;
  const describedBy = [props["aria-describedby"], errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="space-y-1">
      {label ? (
        <label className="text-sm font-medium text-csp-black" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <textarea
        className={cn(
          "w-full rounded-md border border-csp-neutral/70 bg-csp-white px-3 py-2 text-sm text-csp-black outline-none transition focus:border-csp-blue focus:ring-2 focus:ring-csp-blue/25",
          error && "border-csp-error focus:border-csp-error focus:ring-csp-error/20",
          className,
        )}
        aria-describedby={describedBy}
        aria-invalid={error ? "true" : undefined}
        id={id}
        {...props}
      />
      <FieldError error={error} />
    </div>
  );
}

function SelectInput({
  label,
  error,
  options,
  placeholder,
  className,
  id,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}) {
  const errorId = error && id ? `${id}-error` : undefined;
  const describedBy = [props["aria-describedby"], errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="space-y-1">
      {label ? (
        <label className="text-sm font-medium text-csp-black" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <select
        className={cn(
          "h-11 w-full rounded-md border border-csp-neutral/70 bg-csp-white px-3 text-sm text-csp-black outline-none transition focus:border-csp-blue focus:ring-2 focus:ring-csp-blue/25",
          error && "border-csp-error focus:border-csp-error focus:ring-csp-error/20",
          className,
        )}
        aria-describedby={describedBy}
        aria-invalid={error ? "true" : undefined}
        id={id}
        {...props}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FieldError error={error} />
    </div>
  );
}

function Stepper({
  steps,
  currentStep,
  stepStates,
  onStepClick,
}: {
  steps: readonly string[];
  currentStep: number;
  stepStates: Array<"default" | "valid" | "invalid">;
  onStepClick: (index: number) => void;
}) {
  function getStateClass(stepState: "default" | "valid" | "invalid", isActive: boolean) {
    if (stepState === "valid") return "bg-csp-accent text-csp-white";
    if (stepState === "invalid") return "bg-csp-error text-csp-white";
    if (isActive) return "bg-csp-primary text-csp-white";
    return "bg-csp-soft text-csp-primary border border-csp-primary/25";
  }

  return (
    <div className="w-full overflow-x-auto">
      <ol className="flex min-w-max items-center gap-3">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const state = stepStates[index] ?? "default";

          return (
            <li key={step} className="flex items-center gap-3">
              <button className="flex flex-col items-center gap-1" onClick={() => onStepClick(index)} type="button">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold",
                    getStateClass(state, isActive),
                  )}
                >
                  {state === "valid" ? "✓" : index + 1}
                </div>
                <span
                  className={cn(
                    "whitespace-nowrap text-xs font-medium",
                    isActive ? "text-csp-primary" : "text-csp-black/65",
                  )}
                >
                  {step}
                </span>
              </button>
              {index < steps.length - 1 ? <div className="h-[2px] w-8 bg-csp-neutral/30" /> : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success";
}) {
  const variantClasses = {
    default: "bg-csp-primary text-csp-white",
    accent: "bg-csp-accent text-csp-white",
    success: "bg-csp-accent/15 text-csp-accent",
  } as const;

  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", variantClasses[variant])}>
      {children}
    </span>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border border-csp-soft bg-csp-white p-6 shadow-csp", className)}>{children}</div>;
}

function Button({
  children,
  className,
  variant = "primary",
  isLoading = false,
  disabled,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  isLoading?: boolean;
}) {
  const variantClasses = {
    primary: "bg-csp-blue text-csp-white hover:bg-csp-primary focus-visible:ring-csp-blue",
    secondary:
      "border border-csp-primary text-csp-primary hover:bg-csp-soft focus-visible:ring-csp-primary",
    ghost: "border border-transparent text-csp-primary hover:bg-csp-soft focus-visible:ring-csp-primary",
  } as const;

  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-md px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Procesando..." : children}
    </button>
  );
}

function Toast({ message }: { message: string }) {
  return (
    <div className="fixed right-4 top-4 z-50 rounded-md border border-csp-blue/30 bg-csp-blue/10 px-4 py-3 text-sm font-medium text-csp-blue shadow-csp" role="status">
      {message}
    </div>
  );
}

export function RegistrationForm({ category }: RegistrationFormProps) {
  const [formData, setFormData] = useState<RegistrationFormData>(() =>
    createInitialFormData(category),
  );
  const stepKeys = useMemo(() => {
    const keys = getStepKeysByCategory(category);
    const size = formData.teamSize ?? 3;
    return keys.filter((k) => {
      if (k === "responsible") {
        return formData.category === "colegios" || size < 3;
      }
      return true;
    });
  }, [category, formData.teamSize, formData.category]);

  const stepLabels = useMemo(() => stepKeys.map((key) => STEP_LABELS[key]), [stepKeys]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepStates, setStepStates] = useState<Array<"default" | "valid" | "invalid">>(
    () => stepKeys.map(() => "default"),
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [attemptedSteps, setAttemptedSteps] = useState<Partial<Record<RegistrationStepKey, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [isDraftReady, setIsDraftReady] = useState(false);
  const [activeUploads, setActiveUploads] = useState<Record<string, boolean>>({});
  const [memberSlideIndex, setMemberSlideIndex] = useState(0);

  const currentStepKey = stepKeys[currentStepIndex];
  const canGoBack = currentStepIndex > 0;
  const isLastStep = currentStepIndex === stepKeys.length - 1;
  const isUploadingAnyFile = Object.values(activeUploads).some(Boolean);
  const showAllCurrentStepErrors = submitAttempted || Boolean(attemptedSteps[currentStepKey]);

  useEffect(() => {
    const restoreTimer = window.setTimeout(() => {
      const rawDraft = window.localStorage.getItem(DRAFT_KEY);
      if (!rawDraft) {
        setIsDraftReady(true);
        return;
      }

      const parsed = parseDraft(rawDraft, category);
      if (parsed) {
        setFormData(parsed);
        setToastMessage("Se restauró un borrador.");
      }
      setIsDraftReady(true);
    }, 0);

    return () => window.clearTimeout(restoreTimer);
  }, [category]);

  // Keep carousel index within bounds when teamSize changes
  useEffect(() => {
    const size = formData.teamSize ?? 3;
    setMemberSlideIndex((idx) => Math.min(idx, Math.max(0, size - 1)));
  }, [formData.teamSize]);

  useEffect(() => {
    if (!isDraftReady) return;
    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(sanitizeDraft(formData)));
  }, [formData, isDraftReady]);

  useEffect(() => {
    if (!toastMessage) return;
    const timeout = window.setTimeout(() => setToastMessage(""), 3000);
    return () => window.clearTimeout(timeout);
  }, [toastMessage]);

  const submitStatusText =
    submitStatus === "saving"
      ? "Guardando inscripción..."
      : submitStatus === "success"
        ? "Inscripción enviada"
        : isUploadingAnyFile
          ? "Subiendo archivo..."
          : "";

  const visibleErrors = useMemo(() => {
    if (!Object.keys(errors).length) return {};

    return Object.fromEntries(
      Object.entries(errors).filter(([fieldPath]) =>
        showAllCurrentStepErrors ? true : Boolean(touchedFields[fieldPath]),
      ),
    );
  }, [errors, showAllCurrentStepErrors, touchedFields]);

  const setStepStateByValidation = (index: number, stepErrors: FieldErrors) => {
    setStepStates((prev) => {
      const next = [...prev];
      next[index] = Object.keys(stepErrors).length ? "invalid" : "valid";
      return next;
    });
  };

  const validateAndMarkStep = (index: number) => {
    const stepKey = stepKeys[index];
    const stepErrors = validateStepByKey(formData, stepKey);
    setStepStateByValidation(index, stepErrors);
    return stepErrors;
  };

  const markFieldTouched = (fieldPath: string) => {
    setTouchedFields((prev) => (prev[fieldPath] ? prev : { ...prev, [fieldPath]: true }));
  };

  const handleFieldBlur = (fieldPath: string) => {
    markFieldTouched(fieldPath);
    const stepErrors = validateAndMarkStep(currentStepIndex);
    setErrors(stepErrors);
  };

  const updateFormField = <K extends keyof RegistrationFormData>(
    field: K,
    value: RegistrationFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateMember = (memberIndex: number, changes: Partial<TeamMember>) => {
    setFormData((prev) => {
      const nextMembers = [...prev.members] as RegistrationFormData["members"];
      nextMembers[memberIndex] = { ...nextMembers[memberIndex], ...changes };
      return { ...prev, members: nextMembers };
    });
  };

  const setUploadingState = (key: string, uploading: boolean) => {
    setActiveUploads((prev) => ({ ...prev, [key]: uploading }));
  };

  const setTeamSize = (size: number) => {
    setFormData((prev) => {
      const nextMembers = ensureMembersLength(prev.members, size);
      return { ...prev, teamSize: size, members: nextMembers };
    });
  };

  const ensureMembersLength = (members: RegistrationFormData["members"], size: number) => {
    const next = [...members];
    while (next.length < size) next.push(createEmptyMember(`member-${next.length + 1}`));
    return next.slice(0, size);
  };

  const createEmptyMember = (id: string): TeamMember => ({
    id,
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    whatsapp: "",
    career: "",
    universityYear: "",
    schoolGrade: "",
    about: "",
    linkedin: "",
    studentIdFile: null,
  });

  const goToStep = (index: number) => {
    if (isUploadingAnyFile || submitStatus === "saving") return;
    validateAndMarkStep(currentStepIndex);
    setErrors({});
    setCurrentStepIndex(index);
  };

  const handleNext = () => {
    if (isUploadingAnyFile || submitStatus === "saving") return;
    setAttemptedSteps((prev) => ({ ...prev, [currentStepKey]: true }));
    const stepErrors = validateAndMarkStep(currentStepIndex);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    setCurrentStepIndex((prev) => Math.min(prev + 1, stepKeys.length - 1));
  };

  const handlePrevious = () => {
    if (isUploadingAnyFile || submitStatus === "saving") return;
    setErrors({});
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const isSubmitDisabled = isUploadingAnyFile || submitStatus === "saving";

  const handleSubmit = async () => {
    if (isUploadingAnyFile) return;
    setSubmitAttempted(true);
    setAttemptedSteps(
      stepKeys.reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Partial<Record<RegistrationStepKey, boolean>>,
      ),
    );

    const allErrors = validateAllSteps(formData);
    const nextStates = stepKeys.map((stepKey) =>
      Object.keys(validateStepByKey(formData, stepKey)).length ? "invalid" : "valid",
    ) as Array<"default" | "valid" | "invalid">;
    setStepStates(nextStates);
    setErrors(allErrors);

    if (Object.keys(allErrors).length > 0) {
      setSubmitError("Hay campos pendientes por corregir antes de enviar.");
      const Swal = (await import("sweetalert2")).default;
      await Swal.fire({
        title: "Revisa algunos campos",
        text: "Hay información que falta o necesita corregirse. Te marcamos los campos para que puedas revisarlos.",
        confirmButtonText: "Entendido",
        icon: "warning",
      });
      return;
    }

    setSubmitError("");
    setSubmitStatus("saving");

    try {
      // Upload any files that are still local (File objects without URLs)
      const uploadedFormData = { ...formData };
      uploadedFormData.members = await Promise.all(
        formData.members.map(async (member) => {
          if (member.studentIdFile && typeof member.studentIdFile === "object" && "size" in member.studentIdFile && !("fileUrl" in member.studentIdFile)) {
            // This is a File object, not yet uploaded
            const file = member.studentIdFile as any;
            const uploadedFile = await uploadFileToUploadThing(file, "studentIdUploader");
            return { ...member, studentIdFile: uploadedFile };
          }
          return member;
        }),
      );

      if (formData.category === "colegios") {
        const consentFiles = Array.isArray(formData.schoolImageConsentFiles)
          ? formData.schoolImageConsentFiles
          : formData.schoolImageConsentFiles
            ? [formData.schoolImageConsentFiles as any]
            : [];

        uploadedFormData.schoolImageConsentFiles = await Promise.all(
          consentFiles.map(async (file) => {
            if (file && typeof file === "object" && "size" in file && !("fileUrl" in file)) {
              return uploadFileToUploadThing(file as File, "consentUploader");
            }
            return file as UploadedFileMetadata;
          }),
        );
      }

      const registrationId = await createRegistration(uploadedFormData);
      const emailPayload = buildRegistrationEmailPayload(uploadedFormData, registrationId);
      console.log(
        "[EMAIL PREVIEW] Pendiente integrar con Resend / SendGrid / Apps Script / Cloud Functions",
        emailPayload,
      );
      setSubmitStatus("success");
      window.localStorage.removeItem(DRAFT_KEY);
      window.location.assign(`/inscripcion/exito?id=${registrationId}`);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "No fue posible enviar la inscripción.",
      );
      setSubmitStatus("idle");
    }
  };

  const uploadFileToUploadThing = async (
    file: File,
    endpoint: "studentIdUploader" | "consentUploader",
  ): Promise<UploadedFileMetadata> => {
    const [uploadedFile] = await uploadThing.uploadFiles(endpoint, { files: [file] });

    if (!uploadedFile) {
      throw new Error("No file was uploaded");
    }

    return {
      fileName: uploadedFile.name,
      fileSize: uploadedFile.size,
      fileType: uploadedFile.type,
      fileUrl: uploadedFile.ufsUrl || "",
      fileKey: uploadedFile.key,
      uploadedAt: new Date().toISOString(),
      purpose: endpoint === "studentIdUploader" ? "student-id" : "image-consent",
      provider: "uploadthing" as const,
    };
  };

  return (
    <>
      {toastMessage ? <Toast message={toastMessage} /> : null}
      <Card className="space-y-5">
        <Stepper
          currentStep={currentStepIndex}
          onStepClick={goToStep}
          stepStates={stepStates}
          steps={stepLabels}
        />

        {submitStatusText ? (
          <p className="rounded-md bg-csp-soft px-3 py-2 text-sm text-csp-primary">
            {submitStatusText}
          </p>
        ) : null}

        {submitError ? (
          <p className="rounded-md bg-csp-error/10 p-3 text-sm text-csp-error">{submitError}</p>
        ) : null}

        {currentStepKey === "team" ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-md bg-csp-soft p-3">
              <div>
                <h2 className="font-display text-lg font-semibold text-csp-primary">
                  Datos del equipo
                </h2>
                <p className="text-sm text-csp-black/70">
                  Completa la información general para iniciar la inscripción.
                </p>
              </div>
              <Badge variant="accent">
                {formData.category === "colegios" ? "Colegios" : "Universidades"}
              </Badge>
            </div>

            <TextInput
              error={visibleErrors.teamName}
              id="teamName"
              label="Nombre del equipo *"
              onChange={(event) => updateFormField("teamName", event.target.value)}
              onBlur={() => handleFieldBlur("teamName")}
              value={formData.teamName}
            />

            <TextInput
              error={visibleErrors.institution}
              id="institution"
              label={
                formData.category === "colegios"
                  ? "Colegio / institución educativa *"
                  : "Universidad / institución *"
              }
              onChange={(event) => updateFormField("institution", event.target.value)}
              onBlur={() => handleFieldBlur("institution")}
              value={formData.institution}
            />

            <SelectInput
              error={visibleErrors.discoverySource}
              id="discoverySource"
              label="¿Cómo conocieron la Copa? *"
              onChange={(event) =>
                updateFormField(
                  "discoverySource",
                  event.target.value as RegistrationFormData["discoverySource"],
                )
              }
              onBlur={() => handleFieldBlur("discoverySource")}
              options={DISCOVERY_SOURCE_OPTIONS}
              placeholder="Selecciona una opción"
              value={formData.discoverySource}
            />

            {formData.discoverySource === "otro" ? (
              <TextInput
                error={visibleErrors.discoverySourceOther}
                id="discoverySourceOther"
                label="Especifica la fuente *"
                onChange={(event) => updateFormField("discoverySourceOther", event.target.value)}
                onBlur={() => handleFieldBlur("discoverySourceOther")}
                value={formData.discoverySourceOther ?? ""}
              />
            ) : null}

            <TextAreaInput
              error={visibleErrors.teamDescription}
              id="teamDescription"
              label="Descripción breve del equipo *"
              onChange={(event) => updateFormField("teamDescription", event.target.value)}
              onBlur={() => handleFieldBlur("teamDescription")}
              rows={4}
              value={formData.teamDescription}
            />

            <div className="rounded-md border border-csp-primary/20 bg-csp-soft p-3">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-csp-primary">Usuario de OmegaUp</p>
                <Badge>Obligatorio para competir</Badge>
              </div>
              <TextInput
                error={visibleErrors.teamOmegaUpUser}
                id="teamOmegaUpUser"
                label="Usuario de OmegaUp del equipo *"
                onChange={(event) => updateFormField("teamOmegaUpUser", event.target.value)}
                onBlur={() => handleFieldBlur("teamOmegaUpUser")}
                value={formData.teamOmegaUpUser}
              />
              <p className="mt-1 text-xs text-csp-black/70">
                Usaremos este usuario para registrar y validar la participación del equipo en la
                plataforma de competencia.
              </p>
            </div>

            <TextInput
              error={visibleErrors.contactEmail}
              id="contactEmail"
              label="Correo principal (opcional)"
              onChange={(event) => updateFormField("contactEmail", event.target.value)}
              onBlur={() => handleFieldBlur("contactEmail")}
              type="email"
              value={formData.contactEmail ?? ""}
            />

            {/* Team Size Selector */}
            <div className="rounded-md border-2 border-csp-accent/20 bg-gradient-to-br from-csp-accent/5 to-csp-primary/5 p-4">
              <label className="text-sm font-semibold text-csp-primary block mb-3">
                ¿Cuántos integrantes tiene el equipo? *
              </label>
              <div className="flex gap-3">
                {[1, 2, 3].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setTeamSize(size)}
                    className={`flex-1 py-3 rounded-md font-semibold transition ${
                      formData.teamSize === size
                        ? "bg-csp-primary text-csp-white shadow-lg scale-105"
                        : "bg-csp-white text-csp-primary border-2 border-csp-primary/30 hover:border-csp-primary/60"
                    }`}
                  >
                    {size} {size === 1 ? "persona" : "personas"}
                  </button>
                ))}
              </div>
              {(formData.teamSize ?? 3) < 3 ? (
                <p className="mt-3 text-xs text-csp-accent font-medium">
                  Por la complejidad del desafío, no se recomienda grupos de menos de 3 personas.
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        {currentStepKey === "members" ? (
          <div data-step="members" className="space-y-6">
            <div className="rounded-md bg-csp-soft p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="font-display text-lg font-semibold text-csp-primary">
                    Integrantes del equipo
                  </h2>
                  <p className="mt-1 text-sm text-csp-black/70">
                    Completa los datos de cada integrante. Desliza horizontalmente para ver el siguiente.
                  </p>
                </div>
                <div className="bg-csp-primary/10 rounded-lg px-3 py-2 whitespace-nowrap">
                  <p className="text-sm font-semibold text-csp-primary">
                    {(memberSlideIndex ?? 0) + 1} de {formData.teamSize ?? 3}
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative group">
              {/* Previous Button */}
              <button
                type="button"
                aria-label="Integrante anterior"
                onClick={() => setMemberSlideIndex((i) => Math.max(i - 1, 0))}
                disabled={(memberSlideIndex ?? 0) <= 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-csp-primary text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:bg-csp-primary/50"
              >
                <span className="text-xl font-bold">‹</span>
              </button>

              {/* Carousel Viewport */}
              <div className="overflow-hidden rounded-lg border-2 border-csp-primary/20">
                <div
                  className="flex transition-transform duration-300"
                  style={{ transform: `translateX(-${(memberSlideIndex ?? 0) * 100}%)` }}
                >
                  {formData.members.slice(0, formData.teamSize ?? 3).map((member, memberIndex) => {
                    const prefix = `members.${memberIndex}`;

                    return (
                      <div key={member.id} className="min-w-full flex-shrink-0 p-6">
                        <div className="rounded-lg border-2 border-csp-accent/30 bg-gradient-to-br from-csp-primary/8 to-csp-accent/8 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                          {/* Header */}
                          <div className="flex items-center gap-3 pb-4 border-b border-csp-primary/15">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-csp-primary to-csp-accent text-base font-bold text-csp-white shadow-md">
                              {memberIndex + 1}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-display font-semibold text-csp-primary text-base">
                                Integrante {memberIndex + 1}
                              </h3>
                              {memberIndex === 0 ? (
                                <p className="text-xs text-csp-accent font-semibold">Capitán del equipo</p>
                              ) : null}
                            </div>
                          </div>

                          {/* Form Fields */}
                          <div className="grid gap-4 md:grid-cols-2">
                            <TextInput
                              error={visibleErrors[`${prefix}.firstName`]}
                              id={`member-${memberIndex}-firstName`}
                              label="Nombre *"
                              placeholder="Ej. Juan"
                              onChange={(event) => updateMember(memberIndex, { firstName: event.target.value })}
                              onBlur={() => handleFieldBlur(`${prefix}.firstName`)}
                              value={member.firstName}
                            />
                            <TextInput
                              error={visibleErrors[`${prefix}.lastName`]}
                              id={`member-${memberIndex}-lastName`}
                              label="Apellido *"
                              placeholder="Ej. Pérez"
                              onChange={(event) => updateMember(memberIndex, { lastName: event.target.value })}
                              onBlur={() => handleFieldBlur(`${prefix}.lastName`)}
                              value={member.lastName}
                            />
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <TextInput
                              error={visibleErrors[`${prefix}.age`]}
                              id={`member-${memberIndex}-age`}
                              label="Edad *"
                              placeholder="Ej. 17"
                              onChange={(event) =>
                                updateMember(memberIndex, {
                                  age: event.target.value ? Number(event.target.value) : "",
                                })
                              }
                              onBlur={() => handleFieldBlur(`${prefix}.age`)}
                              type="number"
                              value={member.age}
                            />
                            <TextInput
                              error={visibleErrors[`${prefix}.email`]}
                              id={`member-${memberIndex}-email`}
                              label="Correo electrónico *"
                              placeholder="correo@ejemplo.com"
                              onChange={(event) => updateMember(memberIndex, { email: event.target.value })}
                              onBlur={() => handleFieldBlur(`${prefix}.email`)}
                              type="email"
                              value={member.email}
                            />
                          </div>

                          <TextInput
                            id={`member-${memberIndex}-whatsapp`}
                            label="WhatsApp"
                            placeholder="Código país + número, ej. +503 7123 4567"
                            onChange={(event) => updateMember(memberIndex, { whatsapp: event.target.value })}
                            onBlur={() => handleFieldBlur(`${prefix}.whatsapp`)}
                            value={member.whatsapp ?? ""}
                          />

                          {formData.category === "universidades" ? (
                            <div className="space-y-4">
                              <div className="grid gap-4 md:grid-cols-2">
                                <TextInput
                                  error={visibleErrors[`${prefix}.career`]}
                                  id={`member-${memberIndex}-career`}
                                  label="Carrera *"
                                  onChange={(event) => updateMember(memberIndex, { career: event.target.value })}
                                  onBlur={() => handleFieldBlur(`${prefix}.career`)}
                                  value={member.career ?? ""}
                                />
                                <TextInput
                                  error={visibleErrors[`${prefix}.universityYear`]}
                                  id={`member-${memberIndex}-universityYear`}
                                  label="Año de estudio *"
                                  onChange={(event) =>
                                    updateMember(memberIndex, { universityYear: event.target.value })
                                  }
                                  onBlur={() => handleFieldBlur(`${prefix}.universityYear`)}
                                  value={member.universityYear ?? ""}
                                />
                              </div>
                              <TextInput
                                error={visibleErrors[`${prefix}.linkedin`]}
                                id={`member-${memberIndex}-linkedin`}
                                label="LinkedIn (opcional)"
                                onChange={(event) => updateMember(memberIndex, { linkedin: event.target.value })}
                                onBlur={() => handleFieldBlur(`${prefix}.linkedin`)}
                                placeholder="https://www.linkedin.com/in/tu-perfil"
                                type="url"
                                value={member.linkedin ?? ""}
                              />
                            </div>
                          ) : (
                            <TextInput
                              error={visibleErrors[`${prefix}.schoolGrade`]}
                              id={`member-${memberIndex}-schoolGrade`}
                              label="Grado / año escolar *"
                              placeholder="Ej. 3° año"
                              onChange={(event) => updateMember(memberIndex, { schoolGrade: event.target.value })}
                              onBlur={() => handleFieldBlur(`${prefix}.schoolGrade`)}
                              value={member.schoolGrade ?? ""}
                            />
                          )}

                          <TextAreaInput
                            id={`member-${memberIndex}-about`}
                            label="Sobre ti (opcional)"
                            onChange={(event) => updateMember(memberIndex, { about: event.target.value })}
                            onBlur={() => handleFieldBlur(`${prefix}.about`)}
                            rows={3}
                            value={member.about ?? ""}
                          />

                          <UploadField
                            endpoint="studentIdUploader"
                            error={visibleErrors[`${prefix}.studentIdFile`]}
                            label="Carné estudiantil o documento de estudiante *"
                            onChange={(file) => updateMember(memberIndex, { studentIdFile: file as any })}
                            onUploadingChange={(uploading) => setUploadingState("members", uploading)}
                            value={member.studentIdFile ?? null}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Next Button */}
              <button
                type="button"
                aria-label="Siguiente integrante"
                onClick={() =>
                  setMemberSlideIndex((i) => {
                    const size = formData.teamSize ?? 3;
                    return Math.min(i + 1, Math.max(0, size - 1));
                  })
                }
                disabled={(memberSlideIndex ?? 0) >= Math.max(0, (formData.teamSize ?? 3) - 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-csp-primary text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:bg-csp-primary/50"
              >
                <span className="text-xl font-bold">›</span>
              </button>
            </div>

            {/* Navigation Indicators */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-2">
                {Array.from({ length: formData.teamSize ?? 3 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir al integrante ${i + 1}`}
                    aria-current={i === memberSlideIndex || undefined}
                    onClick={() => setMemberSlideIndex(i)}
                    className={`h-3 transition-all ${
                      i === memberSlideIndex
                        ? "w-8 bg-csp-primary rounded-full"
                        : "w-3 bg-csp-primary/40 rounded-full hover:bg-csp-primary/60"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-csp-black/60 font-medium">
                Toca los puntos o desliza para navegar
              </p>
            </div>
          </div>
        ) : null}

        {currentStepKey === "responsible" ? (
          <div className="space-y-4">
            <div className="rounded-md bg-csp-soft p-3">
              <h2 className="font-display text-lg font-semibold text-csp-primary">
                Responsable institucional
              </h2>
              <p className="mt-1 text-sm text-csp-black/70">
                Registra a la persona adulta o institucional que acompañará la inscripción del equipo.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                error={visibleErrors["responsible.firstName"]}
                id="responsible-firstName"
                label="Nombre *"
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    responsible: { ...prev.responsible, firstName: event.target.value },
                  }))
                }
                onBlur={() => handleFieldBlur("responsible.firstName")}
                value={formData.responsible.firstName}
              />
              <TextInput
                error={visibleErrors["responsible.lastName"]}
                id="responsible-lastName"
                label="Apellido *"
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    responsible: { ...prev.responsible, lastName: event.target.value },
                  }))
                }
                onBlur={() => handleFieldBlur("responsible.lastName")}
                value={formData.responsible.lastName}
              />
            </div>

            <TextInput
              error={visibleErrors["responsible.email"]}
              id="responsible-email"
              label="Correo electrónico *"
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  responsible: { ...prev.responsible, email: event.target.value },
                }))
              }
              onBlur={() => handleFieldBlur("responsible.email")}
              type="email"
              value={formData.responsible.email}
            />

            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                error={visibleErrors["responsible.phone"]}
                id="responsible-phone"
                label="Número de teléfono / WhatsApp *"
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    responsible: { ...prev.responsible, phone: event.target.value },
                  }))
                }
                onBlur={() => handleFieldBlur("responsible.phone")}
                value={formData.responsible.phone}
              />
              <TextInput
                error={visibleErrors["responsible.institution"]}
                id="responsible-institution"
                label="Institución *"
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    responsible: { ...prev.responsible, institution: event.target.value },
                  }))
                }
                onBlur={() => handleFieldBlur("responsible.institution")}
                value={formData.responsible.institution}
              />
            </div>

            <SelectInput
              error={visibleErrors["responsible.role"]}
              id="responsible-role"
              label="Rol *"
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  responsible: {
                    ...prev.responsible,
                    role: event.target.value as Responsible["role"],
                  },
                }))
              }
              onBlur={() => handleFieldBlur("responsible.role")}
              options={SCHOOL_RESPONSIBLE_ROLES}
              placeholder="Selecciona un rol"
              value={formData.responsible.role}
            />

            <TextInput
              error={visibleErrors["responsible.relationship"]}
              id="responsible-relationship"
              label="Relación con el equipo *"
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  responsible: { ...prev.responsible, relationship: event.target.value },
                }))
              }
              onBlur={() => handleFieldBlur("responsible.relationship")}
              value={formData.responsible.relationship}
            />

            <TextAreaInput
              id="responsible-comments"
              label="Comentarios adicionales (opcional)"
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  responsible: { ...prev.responsible, comments: event.target.value },
                }))
              }
              onBlur={() => handleFieldBlur("responsible.comments")}
              rows={3}
              value={formData.responsible.comments ?? ""}
            />

          </div>
        ) : null}

        {currentStepKey === "confirmation" ? (
          <div className="space-y-4">
            <Card className="space-y-2">
              <h2 className="font-display text-lg font-semibold text-csp-primary">Información del equipo</h2>
              <p className="text-sm"><strong>Nombre:</strong> {formData.teamName || "-"}</p>
              <p className="text-sm"><strong>Categoría:</strong> {formData.category}</p>
              <p className="text-sm"><strong>Institución:</strong> {formData.institution || "-"}</p>
              <p className="text-sm"><strong>Fuente:</strong> {formData.discoverySource || "-"}</p>
              <p className="text-sm"><strong>Descripción:</strong> {formData.teamDescription || "-"}</p>
              <p className="text-sm"><strong>Usuario de OmegaUp:</strong> {formData.teamOmegaUpUser || "-"}</p>
              <p className="text-sm"><strong>Correo principal:</strong> {formData.contactEmail || "-"}</p>
              <p className="text-sm"><strong>Estado inicial:</strong> <Badge variant="success">Recibida</Badge></p>
            </Card>

            <Card className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-csp-primary">Integrantes</h3>
              {formData.members.map((member, index) => (
                <div key={member.id} className="rounded-md border border-csp-soft p-3 text-sm">
                  <div className="mb-1 flex items-center gap-2">
                    <p className="font-medium text-csp-primary">
                      Miembro {index + 1}: {formatPersonName(member.firstName, member.lastName) || "-"}
                    </p>
                    {index === 0 ? <Badge>Capitán</Badge> : null}
                  </div>
                  <p><strong>Nombre:</strong> {formatPersonName(member.firstName, member.lastName) || "-"}</p>
                  <p><strong>Correo:</strong> {member.email || "-"}</p>
                  <p><strong>Edad:</strong> {member.age || "-"}</p>
                  <p><strong>WhatsApp:</strong> {member.whatsapp || "-"}</p>
                  <p>
                    <strong>{formData.category === "universidades" ? "Carrera/Año" : "Grado escolar"}:</strong>{" "}
                    {formData.category === "universidades"
                      ? `${member.career || "-"} / ${member.universityYear || "-"}`
                      : member.schoolGrade || "-"}
                  </p>
                  {formData.category === "universidades" ? (
                    <p><strong>LinkedIn:</strong> {member.linkedin || "-"}</p>
                  ) : null}
                                  <p><strong>Documento:</strong> {
                                    member.studentIdFile
                                      ? ((member.studentIdFile as any).fileName || (member.studentIdFile as any).name || "Documento adjunto")
                                      : "No adjunto"
                                  }</p>
                </div>
              ))}
            </Card>

            {formData.category === "colegios" ? (
              <Card className="space-y-2">
                <h3 className="font-display text-lg font-semibold text-csp-primary">Responsable</h3>
                <p className="text-sm"><strong>Nombre:</strong> {formatPersonName(formData.responsible.firstName, formData.responsible.lastName) || "-"}</p>
                <p className="text-sm"><strong>Correo:</strong> {formData.responsible.email || "-"}</p>
                <p className="text-sm"><strong>Teléfono:</strong> {formData.responsible.phone || "-"}</p>
                <p className="text-sm"><strong>Institución:</strong> {formData.responsible.institution || "-"}</p>
                <p className="text-sm"><strong>Rol:</strong> {formData.responsible.role || "-"}</p>
                <p className="text-sm"><strong>Relación:</strong> {formData.responsible.relationship || "-"}</p>
                <div className="space-y-2 pt-2">
                  <p className="text-sm font-medium text-csp-primary">Consentimientos de uso de imagen</p>
                  {getConsentFileList(formData.schoolImageConsentFiles).length > 0 ? (
                    <div className="space-y-2">
                      {getConsentFileList(formData.schoolImageConsentFiles).map((file, index) => {
                        const fileName = (file as any).fileName || (file as any).name || `Archivo ${index + 1}`;
                        const fileSize = (file as any).fileSize || (file as any).size || 0;
                        return (
                          <div key={(file as any).fileKey ?? fileName} className="rounded-md border border-csp-accent/30 bg-csp-white p-2 text-xs">
                            <p className="font-medium text-csp-primary">{fileName}</p>
                            <p className="text-csp-black/60">{fileSize ? formatBytes(fileSize) : ""}</p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-csp-black/60">No hay consentimientos adjuntos</p>
                  )}
                </div>
              </Card>
            ) : null}

            <Card className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-csp-primary">
                Confirmaciones y consentimientos
              </h3>

              <label className="flex items-start gap-2 text-sm">
                <input
                  checked={formData.dataReviewAccepted}
                  className="mt-1"
                  onChange={(event) => {
                    markFieldTouched("dataReviewAccepted");
                    const next = { ...formData, dataReviewAccepted: event.target.checked };
                    setFormData(next);
                    setErrors(validateStepByKey(next, currentStepKey));
                  }}
                  onBlur={() => handleFieldBlur("dataReviewAccepted")}
                  type="checkbox"
                />
                <span>
                  He revisado que la información ingresada es correcta y confirmo que todos los
                  integrantes cumplen con las bases de la competencia.
                </span>
              </label>
              <FieldError error={visibleErrors.dataReviewAccepted} />

              <label className="flex items-start gap-2 text-sm">
                <input
                  checked={formData.privacyAccepted}
                  className="mt-1"
                  onChange={(event) => {
                    markFieldTouched("privacyAccepted");
                    const next = { ...formData, privacyAccepted: event.target.checked };
                    setFormData(next);
                    setErrors(validateStepByKey(next, currentStepKey));
                  }}
                  onBlur={() => handleFieldBlur("privacyAccepted")}
                  type="checkbox"
                />
                <span>
                  Acepto el tratamiento de los datos personales para fines relacionados con la
                  Copa Salvadoreña de Programación 2026.
                </span>
              </label>
              <FieldError error={visibleErrors.privacyAccepted} />

              {formData.category === "universidades" ? (
                <>
                  <label className="flex items-start gap-2 text-sm">
                    <input
                      checked={Boolean(formData.universityImageConsentAccepted)}
                      className="mt-1"
                      onChange={(event) => {
                        markFieldTouched("universityImageConsentAccepted");
                        const next = {
                          ...formData,
                          universityImageConsentAccepted: event.target.checked,
                        };
                        setFormData(next);
                        setErrors(validateStepByKey(next, currentStepKey));
                      }}
                      onBlur={() => handleFieldBlur("universityImageConsentAccepted")}
                      type="checkbox"
                    />
                    <span>
                      Acepto el uso de imagen, nombre de equipo y afiliación institucional en
                      fotografías, transmisiones y material oficial de la Copa Salvadoreña de
                      Programación 2026.
                    </span>
                  </label>
                  <FieldError error={visibleErrors.universityImageConsentAccepted} />
                </>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-csp-primary">
                    Consentimientos de uso de imagen *
                  </p>
                  {getConsentFileList(formData.schoolImageConsentFiles).length > 0 ? (
                    <div className="space-y-2">
                      {getConsentFileList(formData.schoolImageConsentFiles).map((file, index) => {
                        const fileName = (file as any).fileName || (file as any).name || `Archivo ${index + 1}`;
                        const fileSize = (file as any).fileSize || (file as any).size || 0;
                        return (
                          <div key={(file as any).fileKey ?? fileName} className="rounded-md border border-csp-accent/30 bg-csp-white p-2 text-xs">
                            <p className="font-medium text-csp-primary">{fileName}</p>
                            <p className="text-csp-black/60">{fileSize ? formatBytes(fileSize) : ""}</p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-csp-black/60">No hay consentimientos adjuntos</p>
                  )}
                  <UploadField
                    description="Adjunta los consentimientos de uso de imagen firmados por los responsables correspondientes de cada estudiante."
                    endpoint="consentUploader"
                    error={visibleErrors.schoolImageConsentFiles}
                    label="Cargar consentimientos de uso de imagen *"
                    multiple
                    onChange={(files) =>
                      setFormData((prev) => {
                        const next = {
                          ...prev,
                          schoolImageConsentFiles: (files as UploadedFileMetadata[]) ?? [],
                        };
                        setErrors(validateStepByKey(next, currentStepKey));
                        return next;
                      })
                    }
                    value={formData.schoolImageConsentFiles ?? []}
                  />
                </div>
              )}
            </Card>
          </div>
        ) : null}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-csp-soft pt-4">
          <Button
            disabled={!canGoBack || isUploadingAnyFile || submitStatus === "saving"}
            onClick={handlePrevious}
            type="button"
            variant="secondary"
          >
            Atrás
          </Button>
          {!isLastStep ? (
            <Button
              disabled={isUploadingAnyFile || submitStatus === "saving"}
              onClick={handleNext}
              type="button"
            >
              Siguiente
            </Button>
          ) : (
            <Button isLoading={submitStatus === "saving"} onClick={handleSubmit} type="button" disabled={isSubmitDisabled}>
              Enviar inscripción
            </Button>
          )}
        </div>
      </Card>
    </>
  );
}