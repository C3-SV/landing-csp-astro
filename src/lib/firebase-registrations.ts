import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, firebaseConfigDiagnostics, isFirebaseConfigured } from "@/lib/firebase";
import type { RegistrationFormData } from "@/lib/types";
import { removeUndefined } from "@/lib/removeUndefined";

const COLLECTION_NAME = "registrations";

export async function createRegistration(formData: RegistrationFormData): Promise<string> {
  if (!db || !isFirebaseConfigured) {
    const invalidKeys = firebaseConfigDiagnostics.invalidEnvKeys.join(", ");
    throw new Error(
      `Firebase no esta configurado correctamente. Revisa las variables PUBLIC_FIREBASE_* o NEXT_PUBLIC_FIREBASE_* (${invalidKeys}).`,
    );
  }

  const size = formData.teamSize ?? 3;
  const includedMembers = formData.members.slice(0, size);
  const missingMemberDoc = includedMembers.some((member) => {
    const hasFileUrl = (member.studentIdFile as any)?.fileUrl;
    const isFile = member.studentIdFile && "size" in member.studentIdFile;
    return !hasFileUrl && !isFile;
  });
  if (missingMemberDoc) {
    throw new Error("Todos los miembros incluidos deben tener su documento subido.");
  }

  if (formData.category === "colegios" && !(formData.schoolImageConsentFiles ?? []).length) {
    throw new Error("Debes subir al menos un consentimiento para colegios.");
  }

  const registrationRef = doc(collection(db, COLLECTION_NAME));
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
      studentIdFile: member.studentIdFile ?? null,
    })),
    responsible:
      formData.category === "colegios"
        ? {
            firstName: formData.responsible.firstName,
            lastName: formData.responsible.lastName,
            email: formData.responsible.email,
            phone: formData.responsible.phone,
            institution: formData.responsible.institution,
            role: formData.responsible.role,
            relationship: formData.responsible.relationship,
            comments: formData.responsible.comments ?? "",
          }
        : undefined,
    consents: {
      dataReviewAccepted: formData.dataReviewAccepted,
      privacyAccepted: formData.privacyAccepted,
      universityImageConsentAccepted: Boolean(formData.universityImageConsentAccepted),
      schoolImageConsentFiles: formData.schoolImageConsentFiles ?? [],
    },
    status: "recibida",
    adminNotes: "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const cleanedPayload = removeUndefined(rawPayload);
  await setDoc(registrationRef, cleanedPayload);
  return registrationId;
}
