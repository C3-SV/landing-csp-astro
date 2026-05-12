import { e as createComponent, r as renderTemplate, n as defineScriptVars, l as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_uYHly2D0.mjs';
import 'piccolore';
import { E as EVENT_NAME, D as DISCOVERY_SOURCE_OPTIONS, S as SCHOOL_RESPONSIBLE_ROLES, b as $$BaseLayout, $ as $$PublicHeader, a as $$PublicFooter } from '../../chunks/PublicHeader_Cy2KZvzW.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useMemo, useEffect } from 'react';
import { genUploader } from 'uploadthing/client';
import { getFirestore, doc, collection, serverTimestamp, setDoc } from 'firebase/firestore';
import { getApps, getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'clsx';
import { extractRouterConfig } from 'uploadthing/server';
import { o as ourFileRouter } from '../../chunks/uploadthing_CkiOpQ_y.mjs';
export { renderers } from '../../renderers.mjs';

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
function formatPersonName(firstName, lastName) {
  return `${firstName?.trim() ?? ""} ${lastName?.trim() ?? ""}`.trim();
}

function buildRegistrationEmailPayload(formData, registrationId) {
  const memberNames = formData.members.map(
    (member) => formatPersonName(member.firstName, member.lastName)
  );
  const omegaUpUsers = [formData.teamOmegaUpUser.trim()].filter(Boolean);
  const documentsSummary = {
    studentIds: formData.members.map((member) => ({
      memberId: member.id,
      fileName: member.studentIdFile?.fileName ?? "",
      fileUrl: member.studentIdFile?.fileUrl ?? "",
      provider: member.studentIdFile?.provider ?? "uploadthing"
    })),
    imageConsents: formData.category === "colegios" ? (formData.schoolImageConsentFiles ?? []).map((file) => ({
      fileName: file.fileName,
      fileUrl: file.fileUrl,
      provider: file.provider
    })) : []
  };
  return {
    to: [
      formData.contactEmail,
      formData.category === "colegios" ? formData.responsible.email : void 0,
      ...formData.members.map((member) => member.email)
    ].filter(Boolean),
    subject: `${EVENT_NAME} - Inscripcion recibida (${formData.teamName})`,
    registrationId,
    teamName: formData.teamName,
    category: formData.category,
    institution: formData.institution,
    members: memberNames,
    omegaUpUsers,
    responsible: formData.category === "colegios" ? {
      firstName: formData.responsible.firstName,
      lastName: formData.responsible.lastName,
      email: formData.responsible.email,
      phone: formData.responsible.phone,
      role: formData.responsible.role
    } : null,
    status: "recibida",
    documentsSummary,
    nextSteps: "Tu inscripcion fue recibida. El comite de la Copa revisara documentos y contactara al responsable con los siguientes pasos."
  };
}

const firebaseConfig = {
  apiKey: "AIzaSyBwFFR0999h_Svq9P5Z5zm0D_-VXa4d-Bs",
  authDomain: "landing-csp.firebaseapp.com",
  projectId: "landing-csp",
  messagingSenderId: "1062879122375",
  appId: "1:1062879122375:web:db74158808cf45fcaeffe2"
};
const placeholderValues = /* @__PURE__ */ new Set([
  "tu_api_key",
  "tu-proyecto.firebaseapp.com",
  "tu-proyecto",
  "1234567890",
  "1:1234567890:web:abcdef123456"
]);
const missingEnvKeys = Object.entries(firebaseConfig).filter(([, value]) => !value).map(([key]) => key);
const placeholderEnvKeys = Object.entries(firebaseConfig).filter(([, value]) => typeof value === "string" && placeholderValues.has(value.trim())).map(([key]) => key);
const invalidEnvKeys = [.../* @__PURE__ */ new Set([...missingEnvKeys, ...placeholderEnvKeys])];
const firebaseConfigDiagnostics = {
  invalidEnvKeys
};
const isFirebaseConfigured = invalidEnvKeys.length === 0;
if (!isFirebaseConfigured) {
  const details = [];
  if (missingEnvKeys.length) details.push(`faltantes: ${missingEnvKeys.join(", ")}`);
  if (placeholderEnvKeys.length) {
    details.push(`placeholders: ${placeholderEnvKeys.join(", ")}`);
  }
  console.warn(
    `[Firebase] Configuracion incompleta (${details.join(" | ")}). Revisa las variables PUBLIC_FIREBASE_* en .env.`
  );
}
const firebaseApp = isFirebaseConfigured ? getApps().length ? getApp() : initializeApp(firebaseConfig) : null;
const firestoreDb = firebaseApp ? getFirestore(firebaseApp) : null;
firebaseApp ? getAuth(firebaseApp) : null;

function removeUndefined(value) {
  if (Array.isArray(value)) {
    return value.map(removeUndefined);
  }
  if (value !== null && typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype) {
    const cleaned = {};
    Object.entries(value).forEach(([key, entryValue]) => {
      if (entryValue !== void 0) {
        cleaned[key] = removeUndefined(entryValue);
      }
    });
    return cleaned;
  }
  return value;
}

const COLLECTION_NAME = "registrations";
async function createRegistration(formData) {
  if (!firestoreDb || !isFirebaseConfigured) {
    const invalidKeys = firebaseConfigDiagnostics.invalidEnvKeys.join(", ");
    throw new Error(
      `Firebase no esta configurado correctamente. Revisa las variables PUBLIC_FIREBASE_* (${invalidKeys}).`
    );
  }
  const size = formData.teamSize ?? 3;
  const includedMembers = formData.members.slice(0, size);
  const missingMemberDoc = includedMembers.some((member) => {
    const hasFileUrl = member.studentIdFile?.fileUrl;
    const isFile = member.studentIdFile && "size" in member.studentIdFile;
    return !hasFileUrl && !isFile;
  });
  if (missingMemberDoc) {
    throw new Error("Todos los miembros incluidos deben tener su documento subido.");
  }
  if (formData.category === "colegios" && !(formData.schoolImageConsentFiles ?? []).length) {
    throw new Error("Debes subir al menos un consentimiento para colegios.");
  }
  const registrationRef = doc(collection(firestoreDb, COLLECTION_NAME));
  const registrationId = registrationRef.id;
  const rawPayload = {
    id: registrationId,
    category: formData.category,
    teamName: formData.teamName,
    institution: formData.institution,
    discoverySource: formData.discoverySource,
    discoverySourceOther: formData.discoverySourceOther ?? "",
    teamDescription: formData.teamDescription,
    teamOmegaUpUser: formData.teamOmegaUpUser,
    contactEmail: formData.contactEmail ?? "",
    members: includedMembers.map((member) => ({
      id: member.id,
      firstName: member.firstName,
      lastName: member.lastName,
      age: Number(member.age),
      email: member.email,
      whatsapp: member.whatsapp ?? "",
      career: member.career ?? "",
      universityYear: member.universityYear ?? "",
      schoolGrade: member.schoolGrade ?? "",
      about: member.about ?? "",
      linkedin: member.linkedin ?? "",
      studentIdFile: member.studentIdFile ?? null
    })),
    responsible: formData.category === "colegios" ? {
      firstName: formData.responsible.firstName,
      lastName: formData.responsible.lastName,
      email: formData.responsible.email,
      phone: formData.responsible.phone,
      institution: formData.responsible.institution,
      role: formData.responsible.role,
      relationship: formData.responsible.relationship,
      comments: formData.responsible.comments ?? ""
    } : void 0,
    consents: {
      dataReviewAccepted: formData.dataReviewAccepted,
      privacyAccepted: formData.privacyAccepted,
      universityImageConsentAccepted: Boolean(formData.universityImageConsentAccepted),
      schoolImageConsentFiles: formData.schoolImageConsentFiles ?? []
    },
    status: "recibida",
    adminNotes: "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
  const cleanedPayload = removeUndefined(rawPayload);
  await setDoc(registrationRef, cleanedPayload);
  return registrationId;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function getStepKeysByCategory(category) {
  if (category === "universidades") {
    return ["team", "members", "confirmation"];
  }
  return ["team", "members", "responsible", "confirmation"];
}
function validateEmail(value) {
  if (!value) return false;
  return EMAIL_REGEX.test(value.trim());
}
function validateLinkedInUrl(value) {
  if (!value?.trim()) return true;
  try {
    const parsed = new URL(value.trim());
    return ["www.linkedin.com", "linkedin.com", "lnkd.in"].includes(parsed.hostname);
  } catch {
    return false;
  }
}
function validateAge(value) {
  if (value === "") return false;
  return Number.isInteger(value) && value >= 10 && value <= 99;
}
function validateMemberCore(member, memberIndex, category) {
  const errors = {};
  const prefix = `members.${memberIndex}`;
  if (!member.firstName.trim()) {
    errors[`${prefix}.firstName`] = "Ingresa el nombre del participante.";
  }
  if (!member.lastName.trim()) {
    errors[`${prefix}.lastName`] = "Ingresa el apellido del participante.";
  }
  if (!validateAge(member.age)) {
    errors[`${prefix}.age`] = "Ingresa una edad válida.";
  }
  if (!member.email.trim()) {
    errors[`${prefix}.email`] = "Ingresa un correo electrónico.";
  } else if (!validateEmail(member.email)) {
    errors[`${prefix}.email`] = "Ingresa un correo electrónico válido.";
  }
  if (category === "universidades") {
    if (!member.career?.trim()) errors[`${prefix}.career`] = "Ingresa la carrera del participante.";
    if (!member.universityYear?.trim()) {
      errors[`${prefix}.universityYear`] = "Ingresa el año de estudio.";
    }
    if (!validateLinkedInUrl(member.linkedin)) {
      errors[`${prefix}.linkedin`] = "Ingresa un enlace válido de LinkedIn.";
    }
  }
  if (category === "colegios" && !member.schoolGrade?.trim()) {
    errors[`${prefix}.schoolGrade`] = "Ingresa el grado o año escolar.";
  }
  if (!member.studentIdFile?.fileUrl && !("size" in (member.studentIdFile ?? {}))) {
    errors[`${prefix}.studentIdFile`] = "Sube el documento del participante.";
  }
  return errors;
}
function validateTeamStep(formData) {
  const errors = {};
  if (!formData.teamName.trim()) errors.teamName = "Ingresa el nombre del equipo.";
  if (!formData.institution.trim()) {
    errors.institution = "Ingresa el nombre de la institución.";
  }
  if (!formData.discoverySource) errors.discoverySource = "Selecciona cómo conocieron la Copa.";
  if (formData.discoverySource === "otro" && !formData.discoverySourceOther?.trim()) {
    errors.discoverySourceOther = "Especifica cómo conocieron la Copa.";
  }
  if (!formData.teamDescription.trim()) {
    errors.teamDescription = "Ingresa una descripción breve del equipo.";
  }
  if (!formData.teamOmegaUpUser.trim()) {
    errors.teamOmegaUpUser = "Ingresa el usuario de OmegaUp del equipo.";
  }
  if (formData.contactEmail && !validateEmail(formData.contactEmail)) {
    errors.contactEmail = "Ingresa un correo electrónico válido.";
  }
  return errors;
}
function validateMembersStep(formData) {
  const errors = {};
  const size = formData.teamSize ?? 3;
  for (let i = 0; i < size; i++) {
    Object.assign(errors, validateMemberCore(formData.members[i], i, formData.category));
  }
  return errors;
}
function validateResponsibleStep(formData) {
  if (formData.category === "universidades") {
    return {};
  }
  const size = formData.teamSize ?? 3;
  const isRequired = formData.category === "colegios" || size < 3;
  if (!isRequired) return {};
  const errors = {};
  const responsible = formData.responsible;
  if (!responsible.firstName.trim()) {
    errors["responsible.firstName"] = "Ingresa el nombre del responsable.";
  }
  if (!responsible.lastName.trim()) {
    errors["responsible.lastName"] = "Ingresa el apellido del responsable.";
  }
  if (!responsible.email.trim()) {
    errors["responsible.email"] = "Ingresa un correo electrónico.";
  } else if (!validateEmail(responsible.email)) {
    errors["responsible.email"] = "Ingresa un correo electrónico válido.";
  }
  if (!responsible.phone.trim()) {
    errors["responsible.phone"] = "Ingresa un número de teléfono o WhatsApp.";
  }
  if (!responsible.institution.trim()) {
    errors["responsible.institution"] = "Ingresa el nombre de la institución.";
  }
  if (!responsible.role) errors["responsible.role"] = "Selecciona el rol del responsable.";
  if (!responsible.relationship.trim()) {
    errors["responsible.relationship"] = "Ingresa la relación con el equipo.";
  }
  return errors;
}
function validateConfirmationStep(formData) {
  const errors = {};
  if (!formData.dataReviewAccepted) {
    errors.dataReviewAccepted = "Debes confirmar que revisaste la información.";
  }
  if (!formData.privacyAccepted) {
    errors.privacyAccepted = "Debes aceptar el tratamiento de datos personales.";
  }
  if (formData.category === "universidades" && !formData.universityImageConsentAccepted) {
    errors.universityImageConsentAccepted = "Debes aceptar el uso de imagen.";
  }
  if (formData.category === "colegios") {
    const files = formData.schoolImageConsentFiles;
    const hasConsentFiles = Array.isArray(files) ? files.length > 0 : Boolean(files);
    if (!hasConsentFiles) {
      errors.schoolImageConsentFiles = "Debes subir al menos un consentimiento de imagen.";
    }
  }
  return errors;
}
function validateStepByKey(formData, stepKey) {
  switch (stepKey) {
    case "team":
      return validateTeamStep(formData);
    case "members":
      return validateMembersStep(formData);
    case "responsible":
      return validateResponsibleStep(formData);
    case "confirmation":
      return validateConfirmationStep(formData);
    default:
      return {};
  }
}
function validateAllSteps(formData) {
  const errors = {};
  const steps = getStepKeysByCategory(formData.category);
  steps.forEach((stepKey) => {
    Object.assign(errors, validateStepByKey(formData, stepKey));
  });
  return errors;
}

const DRAFT_VERSION = 3;
const DRAFT_KEY = "csp-registration-draft";
const STEP_LABELS = {
  team: "Equipo",
  members: "Integrantes",
  responsible: "Responsable",
  confirmation: "Confirmación"
};
function createEmptyMember(id) {
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
    studentIdFile: null
  };
}
function createInitialFormData(category) {
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
      createEmptyMember("member-3")
    ],
    responsible: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      institution: "",
      role: "",
      relationship: "",
      comments: ""
    },
    universityImageConsentAccepted: false,
    schoolImageConsentFiles: [],
    dataReviewAccepted: false,
    privacyAccepted: false,
    status: "recibida",
    adminNotes: ""
  };
}
function sanitizeDraft(formData) {
  return {
    version: DRAFT_VERSION,
    ...formData
  };
}
function parseDraft(rawDraft, category) {
  try {
    const parsed = JSON.parse(rawDraft);
    if (parsed.version !== DRAFT_VERSION || parsed.category !== category) return null;
    const initial = createInitialFormData(category);
    const mergedMembers = (parsed.members ?? initial.members).map((member, index) => ({
      ...initial.members[index],
      ...member,
      studentIdFile: member.studentIdFile && typeof member.studentIdFile === "object" ? member.studentIdFile : null
    }));
    return {
      ...initial,
      ...parsed,
      category,
      members: mergedMembers,
      schoolImageConsentFiles: Array.isArray(parsed.schoolImageConsentFiles) ? parsed.schoolImageConsentFiles : [],
      responsible: {
        ...initial.responsible,
        ...parsed.responsible ?? {}
      }
    };
  } catch {
    return null;
  }
}
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
const uploadThing = genUploader({
  url: "/api/uploadthing",
  package: "uploadthing"
});
function getConsentFileList(value) {
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
  onUploadingChange: _onUploadingChange
}) {
  const [localFile, setLocalFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [localError, setLocalError] = useState("");
  const maxBytes = endpoint === "studentIdUploader" ? 2 * 1024 * 1024 : 3 * 1024 * 1024;
  const files = useMemo(() => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return [value];
  }, [value]);
  const hasFiles = files.length > 0;
  const selectedLabel = files.length === 1 ? `Archivo seleccionado: ${files[0].fileName}` : `${files.length} archivos seleccionados y cargados.`;
  const handleFileSelect = (e) => {
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
    onChange(selectedFile);
    if (selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-2", children: /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-csp-black", children: label }) }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-csp-black/70", children: description ?? "Adjunta el comprobante o archivo solicitado." }),
    !hasFiles && !localFile ? /* @__PURE__ */ jsx("p", { className: "text-xs text-csp-black/70", children: "Selecciona un archivo desde tu dispositivo. Se mostrará una vista previa." }) : null,
    hasFiles && !localFile ? /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-csp-accent/40 bg-csp-white p-2 text-xs text-csp-black/80", children: [
      /* @__PURE__ */ jsx("p", { className: "font-medium text-csp-primary", children: selectedLabel }),
      /* @__PURE__ */ jsx("p", { className: "mt-1", children: "Archivo cargado correctamente. Si lo necesitas, puedes cambiarlo." })
    ] }) : null,
    preview && localFile ? /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-csp-primary/30 overflow-hidden bg-white p-2 space-y-2", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: preview,
          alt: localFile.name,
          className: "w-full h-40 object-cover rounded"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "text-xs space-y-1", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-csp-primary", children: localFile.name }),
        /* @__PURE__ */ jsx("p", { className: "text-csp-black/60", children: formatBytes(localFile.size) })
      ] })
    ] }) : null,
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "rounded-md border-2 border-dashed border-csp-neutral/70 bg-csp-soft p-4",
          "focus-within:border-csp-blue",
          (error || localError) && "border-csp-error",
          (localFile || hasFiles) && "border-csp-accent/70"
        ),
        children: /* @__PURE__ */ jsxs("label", { className: "flex flex-col items-center justify-center cursor-pointer gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-csp-black font-medium text-sm", children: "Arrastra o selecciona el archivo" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-csp-black/70 mt-1", children: endpoint === "studentIdUploader" ? "PDF, PNG, JPG/JPEG - máximo 2MB" : "PDF, PNG, JPG/JPEG - máximo 3MB" })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              onChange: handleFileSelect,
              accept: endpoint === "studentIdUploader" ? ".pdf,.png,.jpg,.jpeg" : ".pdf,.png,.jpg,.jpeg",
              className: "hidden"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.preventDefault();
                const input = e.currentTarget.closest("label")?.querySelector(
                  'input[type="file"]'
                );
                input?.click();
              },
              className: "bg-csp-blue text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-csp-primary transition",
              children: localFile || hasFiles ? "Cambiar archivo" : "Seleccionar archivo"
            }
          )
        ] })
      }
    ),
    localError ? /* @__PURE__ */ jsxs("p", { className: "form-error flex items-start gap-1", children: [
      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "font-semibold", children: "!" }),
      /* @__PURE__ */ jsx("span", { children: localError })
    ] }) : null,
    error ? /* @__PURE__ */ jsxs("p", { className: "form-error flex items-start gap-1", children: [
      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "font-semibold", children: "!" }),
      /* @__PURE__ */ jsx("span", { children: error })
    ] }) : null
  ] });
}
function FieldError({ error }) {
  if (!error) return null;
  return /* @__PURE__ */ jsxs("p", { className: "form-error flex items-start gap-1", children: [
    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "font-semibold", children: "!" }),
    /* @__PURE__ */ jsx("span", { children: error })
  ] });
}
function TextInput({
  label,
  error,
  className,
  id,
  ...props
}) {
  const errorId = error && id ? `${id}-error` : void 0;
  const describedBy = [props["aria-describedby"], errorId].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
    label ? /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-csp-black", htmlFor: id, children: label }) : null,
    /* @__PURE__ */ jsx(
      "input",
      {
        className: cn(
          "h-11 w-full rounded-md border border-csp-neutral/70 bg-csp-white px-3 text-sm text-csp-black outline-none transition focus:border-csp-blue focus:ring-2 focus:ring-csp-blue/25",
          error && "border-csp-error focus:border-csp-error focus:ring-csp-error/20",
          className
        ),
        "aria-describedby": describedBy,
        "aria-invalid": error ? "true" : void 0,
        id,
        ...props
      }
    ),
    /* @__PURE__ */ jsx(FieldError, { error })
  ] });
}
function TextAreaInput({
  label,
  error,
  className,
  id,
  ...props
}) {
  const errorId = error && id ? `${id}-error` : void 0;
  const describedBy = [props["aria-describedby"], errorId].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
    label ? /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-csp-black", htmlFor: id, children: label }) : null,
    /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "w-full rounded-md border border-csp-neutral/70 bg-csp-white px-3 py-2 text-sm text-csp-black outline-none transition focus:border-csp-blue focus:ring-2 focus:ring-csp-blue/25",
          error && "border-csp-error focus:border-csp-error focus:ring-csp-error/20",
          className
        ),
        "aria-describedby": describedBy,
        "aria-invalid": error ? "true" : void 0,
        id,
        ...props
      }
    ),
    /* @__PURE__ */ jsx(FieldError, { error })
  ] });
}
function SelectInput({
  label,
  error,
  options,
  placeholder,
  className,
  id,
  ...props
}) {
  const errorId = error && id ? `${id}-error` : void 0;
  const describedBy = [props["aria-describedby"], errorId].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
    label ? /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-csp-black", htmlFor: id, children: label }) : null,
    /* @__PURE__ */ jsxs(
      "select",
      {
        className: cn(
          "h-11 w-full rounded-md border border-csp-neutral/70 bg-csp-white px-3 text-sm text-csp-black outline-none transition focus:border-csp-blue focus:ring-2 focus:ring-csp-blue/25",
          error && "border-csp-error focus:border-csp-error focus:ring-csp-error/20",
          className
        ),
        "aria-describedby": describedBy,
        "aria-invalid": error ? "true" : void 0,
        id,
        ...props,
        children: [
          placeholder ? /* @__PURE__ */ jsx("option", { value: "", children: placeholder }) : null,
          options.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
        ]
      }
    ),
    /* @__PURE__ */ jsx(FieldError, { error })
  ] });
}
function Stepper({
  steps,
  currentStep,
  stepStates,
  onStepClick
}) {
  function getStateClass(stepState, isActive) {
    if (stepState === "valid") return "bg-csp-accent text-csp-white";
    if (stepState === "invalid") return "bg-csp-error text-csp-white";
    if (isActive) return "bg-csp-primary text-csp-white";
    return "bg-csp-soft text-csp-primary border border-csp-primary/25";
  }
  return /* @__PURE__ */ jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsx("ol", { className: "flex min-w-max items-center gap-3", children: steps.map((step, index) => {
    const isActive = index === currentStep;
    const state = stepStates[index] ?? "default";
    return /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxs("button", { className: "flex flex-col items-center gap-1", onClick: () => onStepClick(index), type: "button", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold",
              getStateClass(state, isActive)
            ),
            children: state === "valid" ? "✓" : index + 1
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "whitespace-nowrap text-xs font-medium",
              isActive ? "text-csp-primary" : "text-csp-black/65"
            ),
            children: step
          }
        )
      ] }),
      index < steps.length - 1 ? /* @__PURE__ */ jsx("div", { className: "h-[2px] w-8 bg-csp-neutral/30" }) : null
    ] }, step);
  }) }) });
}
function Badge({
  children,
  variant = "default"
}) {
  const variantClasses = {
    default: "bg-csp-primary text-csp-white",
    accent: "bg-csp-accent text-csp-white",
    success: "bg-csp-accent/15 text-csp-accent"
  };
  return /* @__PURE__ */ jsx("span", { className: cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", variantClasses[variant]), children });
}
function Card({ children, className }) {
  return /* @__PURE__ */ jsx("div", { className: cn("rounded-lg border border-csp-soft bg-csp-white p-6 shadow-csp", className), children });
}
function Button({
  children,
  className,
  variant = "primary",
  isLoading = false,
  disabled,
  ...props
}) {
  const variantClasses = {
    primary: "bg-csp-blue text-csp-white hover:bg-csp-primary focus-visible:ring-csp-blue",
    secondary: "border border-csp-primary text-csp-primary hover:bg-csp-soft focus-visible:ring-csp-primary",
    ghost: "border border-transparent text-csp-primary hover:bg-csp-soft focus-visible:ring-csp-primary"
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: cn(
        "inline-flex h-11 items-center justify-center rounded-md px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        className
      ),
      disabled: disabled || isLoading,
      ...props,
      children: isLoading ? "Procesando..." : children
    }
  );
}
function Toast({ message }) {
  return /* @__PURE__ */ jsx("div", { className: "fixed right-4 top-4 z-50 rounded-md border border-csp-blue/30 bg-csp-blue/10 px-4 py-3 text-sm font-medium text-csp-blue shadow-csp", role: "status", children: message });
}
function RegistrationForm({ category }) {
  const [formData, setFormData] = useState(
    () => createInitialFormData(category)
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
  const [stepStates, setStepStates] = useState(
    () => stepKeys.map(() => "default")
  );
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [attemptedSteps, setAttemptedSteps] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [isDraftReady, setIsDraftReady] = useState(false);
  const [activeUploads, setActiveUploads] = useState({});
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
    const timeout = window.setTimeout(() => setToastMessage(""), 3e3);
    return () => window.clearTimeout(timeout);
  }, [toastMessage]);
  const submitStatusText = submitStatus === "saving" ? "Guardando inscripción..." : submitStatus === "success" ? "Inscripción enviada" : isUploadingAnyFile ? "Subiendo archivo..." : "";
  const visibleErrors = useMemo(() => {
    if (!Object.keys(errors).length) return {};
    return Object.fromEntries(
      Object.entries(errors).filter(
        ([fieldPath]) => showAllCurrentStepErrors ? true : Boolean(touchedFields[fieldPath])
      )
    );
  }, [errors, showAllCurrentStepErrors, touchedFields]);
  const setStepStateByValidation = (index, stepErrors) => {
    setStepStates((prev) => {
      const next = [...prev];
      next[index] = Object.keys(stepErrors).length ? "invalid" : "valid";
      return next;
    });
  };
  const validateAndMarkStep = (index) => {
    const stepKey = stepKeys[index];
    const stepErrors = validateStepByKey(formData, stepKey);
    setStepStateByValidation(index, stepErrors);
    return stepErrors;
  };
  const markFieldTouched = (fieldPath) => {
    setTouchedFields((prev) => prev[fieldPath] ? prev : { ...prev, [fieldPath]: true });
  };
  const handleFieldBlur = (fieldPath) => {
    markFieldTouched(fieldPath);
    const stepErrors = validateAndMarkStep(currentStepIndex);
    setErrors(stepErrors);
  };
  const updateFormField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const updateMember = (memberIndex, changes) => {
    setFormData((prev) => {
      const nextMembers = [...prev.members];
      nextMembers[memberIndex] = { ...nextMembers[memberIndex], ...changes };
      return { ...prev, members: nextMembers };
    });
  };
  const setUploadingState = (key, uploading) => {
    setActiveUploads((prev) => ({ ...prev, [key]: uploading }));
  };
  const setTeamSize = (size) => {
    setFormData((prev) => {
      const nextMembers = ensureMembersLength(prev.members, size);
      return { ...prev, teamSize: size, members: nextMembers };
    });
  };
  const ensureMembersLength = (members, size) => {
    const next = [...members];
    while (next.length < size) next.push(createEmptyMember2(`member-${next.length + 1}`));
    return next.slice(0, size);
  };
  const createEmptyMember2 = (id) => ({
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
    studentIdFile: null
  });
  const goToStep = (index) => {
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
        {}
      )
    );
    const allErrors = validateAllSteps(formData);
    const nextStates = stepKeys.map(
      (stepKey) => Object.keys(validateStepByKey(formData, stepKey)).length ? "invalid" : "valid"
    );
    setStepStates(nextStates);
    setErrors(allErrors);
    if (Object.keys(allErrors).length > 0) {
      setSubmitError("Hay campos pendientes por corregir antes de enviar.");
      const Swal = (await import('sweetalert2')).default;
      await Swal.fire({
        title: "Revisa algunos campos",
        text: "Hay información que falta o necesita corregirse. Te marcamos los campos para que puedas revisarlos.",
        confirmButtonText: "Entendido",
        icon: "warning"
      });
      return;
    }
    setSubmitError("");
    setSubmitStatus("saving");
    try {
      const uploadedFormData = { ...formData };
      uploadedFormData.members = await Promise.all(
        formData.members.map(async (member) => {
          if (member.studentIdFile && typeof member.studentIdFile === "object" && "size" in member.studentIdFile && !("fileUrl" in member.studentIdFile)) {
            const file = member.studentIdFile;
            const uploadedFile = await uploadFileToUploadThing(file, "studentIdUploader");
            return { ...member, studentIdFile: uploadedFile };
          }
          return member;
        })
      );
      if (formData.category === "colegios") {
        const consentFiles = Array.isArray(formData.schoolImageConsentFiles) ? formData.schoolImageConsentFiles : formData.schoolImageConsentFiles ? [formData.schoolImageConsentFiles] : [];
        uploadedFormData.schoolImageConsentFiles = await Promise.all(
          consentFiles.map(async (file) => {
            if (file && typeof file === "object" && "size" in file && !("fileUrl" in file)) {
              return uploadFileToUploadThing(file, "consentUploader");
            }
            return file;
          })
        );
      }
      const registrationId = await createRegistration(uploadedFormData);
      const emailPayload = buildRegistrationEmailPayload(uploadedFormData, registrationId);
      console.log(
        "[EMAIL PREVIEW] Pendiente integrar con Resend / SendGrid / Apps Script / Cloud Functions",
        emailPayload
      );
      setSubmitStatus("success");
      window.localStorage.removeItem(DRAFT_KEY);
      window.location.assign(`/inscripcion/exito?id=${registrationId}`);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "No fue posible enviar la inscripción."
      );
      setSubmitStatus("idle");
    }
  };
  const uploadFileToUploadThing = async (file, endpoint) => {
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
      uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
      purpose: endpoint === "studentIdUploader" ? "student-id" : "image-consent",
      provider: "uploadthing"
    };
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    toastMessage ? /* @__PURE__ */ jsx(Toast, { message: toastMessage }) : null,
    /* @__PURE__ */ jsxs(Card, { className: "space-y-5", children: [
      /* @__PURE__ */ jsx(
        Stepper,
        {
          currentStep: currentStepIndex,
          onStepClick: goToStep,
          stepStates,
          steps: stepLabels
        }
      ),
      submitStatusText ? /* @__PURE__ */ jsx("p", { className: "rounded-md bg-csp-soft px-3 py-2 text-sm text-csp-primary", children: submitStatusText }) : null,
      submitError ? /* @__PURE__ */ jsx("p", { className: "rounded-md bg-csp-error/10 p-3 text-sm text-csp-error", children: submitError }) : null,
      currentStepKey === "team" ? /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-md bg-csp-soft p-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-semibold text-csp-primary", children: "Datos del equipo" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-csp-black/70", children: "Completa la información general para iniciar la inscripción." })
          ] }),
          /* @__PURE__ */ jsx(Badge, { variant: "accent", children: formData.category === "colegios" ? "Colegios" : "Universidades" })
        ] }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            error: visibleErrors.teamName,
            id: "teamName",
            label: "Nombre del equipo *",
            onChange: (event) => updateFormField("teamName", event.target.value),
            onBlur: () => handleFieldBlur("teamName"),
            value: formData.teamName
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            error: visibleErrors.institution,
            id: "institution",
            label: formData.category === "colegios" ? "Colegio / institución educativa *" : "Universidad / institución *",
            onChange: (event) => updateFormField("institution", event.target.value),
            onBlur: () => handleFieldBlur("institution"),
            value: formData.institution
          }
        ),
        /* @__PURE__ */ jsx(
          SelectInput,
          {
            error: visibleErrors.discoverySource,
            id: "discoverySource",
            label: "¿Cómo conocieron la Copa? *",
            onChange: (event) => updateFormField(
              "discoverySource",
              event.target.value
            ),
            onBlur: () => handleFieldBlur("discoverySource"),
            options: DISCOVERY_SOURCE_OPTIONS,
            placeholder: "Selecciona una opción",
            value: formData.discoverySource
          }
        ),
        formData.discoverySource === "otro" ? /* @__PURE__ */ jsx(
          TextInput,
          {
            error: visibleErrors.discoverySourceOther,
            id: "discoverySourceOther",
            label: "Especifica la fuente *",
            onChange: (event) => updateFormField("discoverySourceOther", event.target.value),
            onBlur: () => handleFieldBlur("discoverySourceOther"),
            value: formData.discoverySourceOther ?? ""
          }
        ) : null,
        /* @__PURE__ */ jsx(
          TextAreaInput,
          {
            error: visibleErrors.teamDescription,
            id: "teamDescription",
            label: "Descripción breve del equipo *",
            onChange: (event) => updateFormField("teamDescription", event.target.value),
            onBlur: () => handleFieldBlur("teamDescription"),
            rows: 4,
            value: formData.teamDescription
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-csp-primary/20 bg-csp-soft p-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-csp-primary", children: "Usuario de OmegaUp" }),
            /* @__PURE__ */ jsx(Badge, { children: "Obligatorio para competir" })
          ] }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              error: visibleErrors.teamOmegaUpUser,
              id: "teamOmegaUpUser",
              label: "Usuario de OmegaUp del equipo *",
              onChange: (event) => updateFormField("teamOmegaUpUser", event.target.value),
              onBlur: () => handleFieldBlur("teamOmegaUpUser"),
              value: formData.teamOmegaUpUser
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-csp-black/70", children: "Usaremos este usuario para registrar y validar la participación del equipo en la plataforma de competencia." })
        ] }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            error: visibleErrors.contactEmail,
            id: "contactEmail",
            label: "Correo principal (opcional)",
            onChange: (event) => updateFormField("contactEmail", event.target.value),
            onBlur: () => handleFieldBlur("contactEmail"),
            type: "email",
            value: formData.contactEmail ?? ""
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "rounded-md border-2 border-csp-accent/20 bg-gradient-to-br from-csp-accent/5 to-csp-primary/5 p-4", children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-semibold text-csp-primary block mb-3", children: "¿Cuántos integrantes tiene el equipo? *" }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: [1, 2, 3].map((size) => /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setTeamSize(size),
              className: `flex-1 py-3 rounded-md font-semibold transition ${formData.teamSize === size ? "bg-csp-primary text-csp-white shadow-lg scale-105" : "bg-csp-white text-csp-primary border-2 border-csp-primary/30 hover:border-csp-primary/60"}`,
              children: [
                size,
                " ",
                size === 1 ? "persona" : "personas"
              ]
            },
            size
          )) }),
          (formData.teamSize ?? 3) < 3 ? /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-csp-accent font-medium", children: "Por la complejidad del desafío, no se recomienda grupos de menos de 3 personas." }) : null
        ] })
      ] }) : null,
      currentStepKey === "members" ? /* @__PURE__ */ jsxs("div", { "data-step": "members", className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-md bg-csp-soft p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-semibold text-csp-primary", children: "Integrantes del equipo" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-csp-black/70", children: "Completa los datos de cada integrante. Desliza horizontalmente para ver el siguiente." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-csp-primary/10 rounded-lg px-3 py-2 whitespace-nowrap", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-csp-primary", children: [
            (memberSlideIndex ?? 0) + 1,
            " de ",
            formData.teamSize ?? 3
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": "Integrante anterior",
              onClick: () => setMemberSlideIndex((i) => Math.max(i - 1, 0)),
              disabled: (memberSlideIndex ?? 0) <= 0,
              className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-csp-primary text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:bg-csp-primary/50",
              children: /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "‹" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg border-2 border-csp-primary/20", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex transition-transform duration-300",
              style: { transform: `translateX(-${(memberSlideIndex ?? 0) * 100}%)` },
              children: formData.members.slice(0, formData.teamSize ?? 3).map((member, memberIndex) => {
                const prefix = `members.${memberIndex}`;
                return /* @__PURE__ */ jsx("div", { className: "min-w-full flex-shrink-0 p-6", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-csp-accent/30 bg-gradient-to-br from-csp-primary/8 to-csp-accent/8 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pb-4 border-b border-csp-primary/15", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-csp-primary to-csp-accent text-base font-bold text-csp-white shadow-md", children: memberIndex + 1 }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "font-display font-semibold text-csp-primary text-base", children: [
                        "Integrante ",
                        memberIndex + 1
                      ] }),
                      memberIndex === 0 ? /* @__PURE__ */ jsx("p", { className: "text-xs text-csp-accent font-semibold", children: "Capitán del equipo" }) : null
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsx(
                      TextInput,
                      {
                        error: visibleErrors[`${prefix}.firstName`],
                        id: `member-${memberIndex}-firstName`,
                        label: "Nombre *",
                        placeholder: "Ej. Juan",
                        onChange: (event) => updateMember(memberIndex, { firstName: event.target.value }),
                        onBlur: () => handleFieldBlur(`${prefix}.firstName`),
                        value: member.firstName
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      TextInput,
                      {
                        error: visibleErrors[`${prefix}.lastName`],
                        id: `member-${memberIndex}-lastName`,
                        label: "Apellido *",
                        placeholder: "Ej. Pérez",
                        onChange: (event) => updateMember(memberIndex, { lastName: event.target.value }),
                        onBlur: () => handleFieldBlur(`${prefix}.lastName`),
                        value: member.lastName
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsx(
                      TextInput,
                      {
                        error: visibleErrors[`${prefix}.age`],
                        id: `member-${memberIndex}-age`,
                        label: "Edad *",
                        placeholder: "Ej. 17",
                        onChange: (event) => updateMember(memberIndex, {
                          age: event.target.value ? Number(event.target.value) : ""
                        }),
                        onBlur: () => handleFieldBlur(`${prefix}.age`),
                        type: "number",
                        value: member.age
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      TextInput,
                      {
                        error: visibleErrors[`${prefix}.email`],
                        id: `member-${memberIndex}-email`,
                        label: "Correo electrónico *",
                        placeholder: "correo@ejemplo.com",
                        onChange: (event) => updateMember(memberIndex, { email: event.target.value }),
                        onBlur: () => handleFieldBlur(`${prefix}.email`),
                        type: "email",
                        value: member.email
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    TextInput,
                    {
                      id: `member-${memberIndex}-whatsapp`,
                      label: "WhatsApp",
                      placeholder: "Código país + número, ej. +503 7123 4567",
                      onChange: (event) => updateMember(memberIndex, { whatsapp: event.target.value }),
                      onBlur: () => handleFieldBlur(`${prefix}.whatsapp`),
                      value: member.whatsapp ?? ""
                    }
                  ),
                  formData.category === "universidades" ? /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          error: visibleErrors[`${prefix}.career`],
                          id: `member-${memberIndex}-career`,
                          label: "Carrera *",
                          onChange: (event) => updateMember(memberIndex, { career: event.target.value }),
                          onBlur: () => handleFieldBlur(`${prefix}.career`),
                          value: member.career ?? ""
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          error: visibleErrors[`${prefix}.universityYear`],
                          id: `member-${memberIndex}-universityYear`,
                          label: "Año de estudio *",
                          onChange: (event) => updateMember(memberIndex, { universityYear: event.target.value }),
                          onBlur: () => handleFieldBlur(`${prefix}.universityYear`),
                          value: member.universityYear ?? ""
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      TextInput,
                      {
                        error: visibleErrors[`${prefix}.linkedin`],
                        id: `member-${memberIndex}-linkedin`,
                        label: "LinkedIn (opcional)",
                        onChange: (event) => updateMember(memberIndex, { linkedin: event.target.value }),
                        onBlur: () => handleFieldBlur(`${prefix}.linkedin`),
                        placeholder: "https://www.linkedin.com/in/tu-perfil",
                        type: "url",
                        value: member.linkedin ?? ""
                      }
                    )
                  ] }) : /* @__PURE__ */ jsx(
                    TextInput,
                    {
                      error: visibleErrors[`${prefix}.schoolGrade`],
                      id: `member-${memberIndex}-schoolGrade`,
                      label: "Grado / año escolar *",
                      placeholder: "Ej. 3° año",
                      onChange: (event) => updateMember(memberIndex, { schoolGrade: event.target.value }),
                      onBlur: () => handleFieldBlur(`${prefix}.schoolGrade`),
                      value: member.schoolGrade ?? ""
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    TextAreaInput,
                    {
                      id: `member-${memberIndex}-about`,
                      label: "Sobre ti (opcional)",
                      onChange: (event) => updateMember(memberIndex, { about: event.target.value }),
                      onBlur: () => handleFieldBlur(`${prefix}.about`),
                      rows: 3,
                      value: member.about ?? ""
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    UploadField,
                    {
                      endpoint: "studentIdUploader",
                      error: visibleErrors[`${prefix}.studentIdFile`],
                      label: "Carné estudiantil o documento de estudiante *",
                      onChange: (file) => updateMember(memberIndex, { studentIdFile: file }),
                      onUploadingChange: (uploading) => setUploadingState("members", uploading),
                      value: member.studentIdFile ?? null
                    }
                  )
                ] }) }, member.id);
              })
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": "Siguiente integrante",
              onClick: () => setMemberSlideIndex((i) => {
                const size = formData.teamSize ?? 3;
                return Math.min(i + 1, Math.max(0, size - 1));
              }),
              disabled: (memberSlideIndex ?? 0) >= Math.max(0, (formData.teamSize ?? 3) - 1),
              className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-csp-primary text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:bg-csp-primary/50",
              children: /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "›" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: Array.from({ length: formData.teamSize ?? 3 }).map((_, i) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": `Ir al integrante ${i + 1}`,
              "aria-current": i === memberSlideIndex || void 0,
              onClick: () => setMemberSlideIndex(i),
              className: `h-3 transition-all ${i === memberSlideIndex ? "w-8 bg-csp-primary rounded-full" : "w-3 bg-csp-primary/40 rounded-full hover:bg-csp-primary/60"}`
            },
            i
          )) }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-csp-black/60 font-medium", children: "Toca los puntos o desliza para navegar" })
        ] })
      ] }) : null,
      currentStepKey === "responsible" ? /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-md bg-csp-soft p-3", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-semibold text-csp-primary", children: "Responsable institucional" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-csp-black/70", children: "Registra a la persona adulta o institucional que acompañará la inscripción del equipo." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx(
            TextInput,
            {
              error: visibleErrors["responsible.firstName"],
              id: "responsible-firstName",
              label: "Nombre *",
              onChange: (event) => setFormData((prev) => ({
                ...prev,
                responsible: { ...prev.responsible, firstName: event.target.value }
              })),
              onBlur: () => handleFieldBlur("responsible.firstName"),
              value: formData.responsible.firstName
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              error: visibleErrors["responsible.lastName"],
              id: "responsible-lastName",
              label: "Apellido *",
              onChange: (event) => setFormData((prev) => ({
                ...prev,
                responsible: { ...prev.responsible, lastName: event.target.value }
              })),
              onBlur: () => handleFieldBlur("responsible.lastName"),
              value: formData.responsible.lastName
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            error: visibleErrors["responsible.email"],
            id: "responsible-email",
            label: "Correo electrónico *",
            onChange: (event) => setFormData((prev) => ({
              ...prev,
              responsible: { ...prev.responsible, email: event.target.value }
            })),
            onBlur: () => handleFieldBlur("responsible.email"),
            type: "email",
            value: formData.responsible.email
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx(
            TextInput,
            {
              error: visibleErrors["responsible.phone"],
              id: "responsible-phone",
              label: "Número de teléfono / WhatsApp *",
              onChange: (event) => setFormData((prev) => ({
                ...prev,
                responsible: { ...prev.responsible, phone: event.target.value }
              })),
              onBlur: () => handleFieldBlur("responsible.phone"),
              value: formData.responsible.phone
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              error: visibleErrors["responsible.institution"],
              id: "responsible-institution",
              label: "Institución *",
              onChange: (event) => setFormData((prev) => ({
                ...prev,
                responsible: { ...prev.responsible, institution: event.target.value }
              })),
              onBlur: () => handleFieldBlur("responsible.institution"),
              value: formData.responsible.institution
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          SelectInput,
          {
            error: visibleErrors["responsible.role"],
            id: "responsible-role",
            label: "Rol *",
            onChange: (event) => setFormData((prev) => ({
              ...prev,
              responsible: {
                ...prev.responsible,
                role: event.target.value
              }
            })),
            onBlur: () => handleFieldBlur("responsible.role"),
            options: SCHOOL_RESPONSIBLE_ROLES,
            placeholder: "Selecciona un rol",
            value: formData.responsible.role
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            error: visibleErrors["responsible.relationship"],
            id: "responsible-relationship",
            label: "Relación con el equipo *",
            onChange: (event) => setFormData((prev) => ({
              ...prev,
              responsible: { ...prev.responsible, relationship: event.target.value }
            })),
            onBlur: () => handleFieldBlur("responsible.relationship"),
            value: formData.responsible.relationship
          }
        ),
        /* @__PURE__ */ jsx(
          TextAreaInput,
          {
            id: "responsible-comments",
            label: "Comentarios adicionales (opcional)",
            onChange: (event) => setFormData((prev) => ({
              ...prev,
              responsible: { ...prev.responsible, comments: event.target.value }
            })),
            onBlur: () => handleFieldBlur("responsible.comments"),
            rows: 3,
            value: formData.responsible.comments ?? ""
          }
        )
      ] }) : null,
      currentStepKey === "confirmation" ? /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs(Card, { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-semibold text-csp-primary", children: "Información del equipo" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Nombre:" }),
            " ",
            formData.teamName || "-"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Categoría:" }),
            " ",
            formData.category
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Institución:" }),
            " ",
            formData.institution || "-"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Fuente:" }),
            " ",
            formData.discoverySource || "-"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Descripción:" }),
            " ",
            formData.teamDescription || "-"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Usuario de OmegaUp:" }),
            " ",
            formData.teamOmegaUpUser || "-"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Correo principal:" }),
            " ",
            formData.contactEmail || "-"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Estado inicial:" }),
            " ",
            /* @__PURE__ */ jsx(Badge, { variant: "success", children: "Recibida" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-csp-primary", children: "Integrantes" }),
          formData.members.map((member, index) => /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-csp-soft p-3 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs("p", { className: "font-medium text-csp-primary", children: [
                "Miembro ",
                index + 1,
                ": ",
                formatPersonName(member.firstName, member.lastName) || "-"
              ] }),
              index === 0 ? /* @__PURE__ */ jsx(Badge, { children: "Capitán" }) : null
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Nombre:" }),
              " ",
              formatPersonName(member.firstName, member.lastName) || "-"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Correo:" }),
              " ",
              member.email || "-"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Edad:" }),
              " ",
              member.age || "-"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "WhatsApp:" }),
              " ",
              member.whatsapp || "-"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsxs("strong", { children: [
                formData.category === "universidades" ? "Carrera/Año" : "Grado escolar",
                ":"
              ] }),
              " ",
              formData.category === "universidades" ? `${member.career || "-"} / ${member.universityYear || "-"}` : member.schoolGrade || "-"
            ] }),
            formData.category === "universidades" ? /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "LinkedIn:" }),
              " ",
              member.linkedin || "-"
            ] }) : null,
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Documento:" }),
              " ",
              member.studentIdFile ? member.studentIdFile.fileName || member.studentIdFile.name || "Documento adjunto" : "No adjunto"
            ] })
          ] }, member.id))
        ] }),
        formData.category === "colegios" ? /* @__PURE__ */ jsxs(Card, { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-csp-primary", children: "Responsable" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Nombre:" }),
            " ",
            formatPersonName(formData.responsible.firstName, formData.responsible.lastName) || "-"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Correo:" }),
            " ",
            formData.responsible.email || "-"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Teléfono:" }),
            " ",
            formData.responsible.phone || "-"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Institución:" }),
            " ",
            formData.responsible.institution || "-"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Rol:" }),
            " ",
            formData.responsible.role || "-"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("strong", { children: "Relación:" }),
            " ",
            formData.responsible.relationship || "-"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 pt-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-csp-primary", children: "Consentimientos de uso de imagen" }),
            getConsentFileList(formData.schoolImageConsentFiles).length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-2", children: getConsentFileList(formData.schoolImageConsentFiles).map((file, index) => {
              const fileName = file.fileName || file.name || `Archivo ${index + 1}`;
              const fileSize = file.fileSize || file.size || 0;
              return /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-csp-accent/30 bg-csp-white p-2 text-xs", children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-csp-primary", children: fileName }),
                /* @__PURE__ */ jsx("p", { className: "text-csp-black/60", children: fileSize ? formatBytes(fileSize) : "" })
              ] }, file.fileKey ?? fileName);
            }) }) : /* @__PURE__ */ jsx("p", { className: "text-xs text-csp-black/60", children: "No hay consentimientos adjuntos" })
          ] })
        ] }) : null,
        /* @__PURE__ */ jsxs(Card, { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-csp-primary", children: "Confirmaciones y consentimientos" }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                checked: formData.dataReviewAccepted,
                className: "mt-1",
                onChange: (event) => {
                  markFieldTouched("dataReviewAccepted");
                  const next = { ...formData, dataReviewAccepted: event.target.checked };
                  setFormData(next);
                  setErrors(validateStepByKey(next, currentStepKey));
                },
                onBlur: () => handleFieldBlur("dataReviewAccepted"),
                type: "checkbox"
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "He revisado que la información ingresada es correcta y confirmo que todos los integrantes cumplen con las bases de la competencia." })
          ] }),
          /* @__PURE__ */ jsx(FieldError, { error: visibleErrors.dataReviewAccepted }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                checked: formData.privacyAccepted,
                className: "mt-1",
                onChange: (event) => {
                  markFieldTouched("privacyAccepted");
                  const next = { ...formData, privacyAccepted: event.target.checked };
                  setFormData(next);
                  setErrors(validateStepByKey(next, currentStepKey));
                },
                onBlur: () => handleFieldBlur("privacyAccepted"),
                type: "checkbox"
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "Acepto el tratamiento de los datos personales para fines relacionados con la Copa Salvadoreña de Programación 2026." })
          ] }),
          /* @__PURE__ */ jsx(FieldError, { error: visibleErrors.privacyAccepted }),
          formData.category === "universidades" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  checked: Boolean(formData.universityImageConsentAccepted),
                  className: "mt-1",
                  onChange: (event) => {
                    markFieldTouched("universityImageConsentAccepted");
                    const next = {
                      ...formData,
                      universityImageConsentAccepted: event.target.checked
                    };
                    setFormData(next);
                    setErrors(validateStepByKey(next, currentStepKey));
                  },
                  onBlur: () => handleFieldBlur("universityImageConsentAccepted"),
                  type: "checkbox"
                }
              ),
              /* @__PURE__ */ jsx("span", { children: "Acepto el uso de imagen, nombre de equipo y afiliación institucional en fotografías, transmisiones y material oficial de la Copa Salvadoreña de Programación 2026." })
            ] }),
            /* @__PURE__ */ jsx(FieldError, { error: visibleErrors.universityImageConsentAccepted })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-csp-primary", children: "Consentimientos de uso de imagen *" }),
            getConsentFileList(formData.schoolImageConsentFiles).length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-2", children: getConsentFileList(formData.schoolImageConsentFiles).map((file, index) => {
              const fileName = file.fileName || file.name || `Archivo ${index + 1}`;
              const fileSize = file.fileSize || file.size || 0;
              return /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-csp-accent/30 bg-csp-white p-2 text-xs", children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-csp-primary", children: fileName }),
                /* @__PURE__ */ jsx("p", { className: "text-csp-black/60", children: fileSize ? formatBytes(fileSize) : "" })
              ] }, file.fileKey ?? fileName);
            }) }) : /* @__PURE__ */ jsx("p", { className: "text-xs text-csp-black/60", children: "No hay consentimientos adjuntos" }),
            /* @__PURE__ */ jsx(
              UploadField,
              {
                description: "Adjunta los consentimientos de uso de imagen firmados por los responsables correspondientes de cada estudiante.",
                endpoint: "consentUploader",
                error: visibleErrors.schoolImageConsentFiles,
                label: "Cargar consentimientos de uso de imagen *",
                multiple: true,
                onChange: (files) => setFormData((prev) => {
                  const next = {
                    ...prev,
                    schoolImageConsentFiles: files ?? []
                  };
                  setErrors(validateStepByKey(next, currentStepKey));
                  return next;
                }),
                value: formData.schoolImageConsentFiles ?? []
              }
            )
          ] })
        ] })
      ] }) : null,
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-t border-csp-soft pt-4", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            disabled: !canGoBack || isUploadingAnyFile || submitStatus === "saving",
            onClick: handlePrevious,
            type: "button",
            variant: "secondary",
            children: "Atrás"
          }
        ),
        !isLastStep ? /* @__PURE__ */ jsx(
          Button,
          {
            disabled: isUploadingAnyFile || submitStatus === "saving",
            onClick: handleNext,
            type: "button",
            children: "Siguiente"
          }
        ) : /* @__PURE__ */ jsx(Button, { isLoading: submitStatus === "saving", onClick: handleSubmit, type: "button", disabled: isSubmitDisabled, children: "Enviar inscripción" })
      ] })
    ] })
  ] });
}

function parseCategory(value) {
  if (value === "colegios" || value === "universidades") {
    return value;
  }
  return null;
}
function RegistrationRoute() {
  const [category, setCategory] = useState(null);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const parsedCategory = parseCategory(params.get("categoria")?.trim() ?? null);
    if (!parsedCategory) {
      window.location.replace("/inscripcion");
      return;
    }
    setCategory(parsedCategory);
    setIsReady(true);
  }, []);
  if (!isReady || !category) {
    return /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-csp-soft bg-csp-white p-6 shadow-csp", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-csp-black/70", children: "Cargando formulario..." }) });
  }
  return /* @__PURE__ */ jsx(RegistrationForm, { category });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$UploadThingSSR = createComponent(($$result, $$props, $$slots) => {
  const routerConfig = extractRouterConfig(ourFileRouter);
  globalThis.__UPLOADTHING ??= routerConfig;
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n  globalThis.__UPLOADTHING ??= routerConfig;\n})();<\/script>"])), defineScriptVars({ routerConfig }));
}, "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/components/UploadThingSSR.astro", void 0);

const $$Registro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Formulario de inscripci\xF3n | ${EVENT_NAME}`, "description": "Inicio del formulario de registro de equipos." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "UploadThingSSR", $$UploadThingSSR, {})} ${maybeRenderHead()}<div class="flex min-h-screen flex-col"> ${renderComponent($$result2, "PublicHeader", $$PublicHeader, {})} <main class="mx-auto w-full max-w-4xl flex-1 px-4 py-10"> <h1 class="mb-2 font-display text-3xl font-semibold text-csp-primary">Formulario de inscripción</h1> <p class="mb-6 text-sm text-csp-black/70">Completa los 6 pasos para registrar oficialmente al equipo.</p> ${renderComponent($$result2, "RegistrationRoute", RegistrationRoute, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/components/RegistrationRoute", "client:component-export": "RegistrationRoute" })} </main> ${renderComponent($$result2, "PublicFooter", $$PublicFooter, {})} </div> ` })}`;
}, "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/inscripcion/registro.astro", void 0);

const $$file = "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/inscripcion/registro.astro";
const $$url = "/inscripcion/registro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Registro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
