import type {
  DiscoverySource,
  RegistrationCategory,
  RegistrationStatus,
  ResponsibleRole,
} from "./types";

export const EVENT_NAME = "Copa Salvadoreña de Programación 2026";
export const EVENT_SHORT_NAME = "CSP 2026";

export const ONLINE_PHASE_DATE = "1 de agosto de 2026";
export const SCHOOL_PRESENTIAL_DATE = "15 de agosto de 2026";
export const UNIVERSITY_PRESENTIAL_DATE = "29 de agosto de 2026";

export const DISCOVERY_SOURCE_OPTIONS: Array<{
  value: DiscoverySource;
  label: string;
}> = [
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "c3", label: "Comunidad C3" },
  { value: "esen", label: "ESEN" },
  { value: "omegaup", label: "OmegaUp" },
  { value: "profesor", label: "Profesor / docente" },
  { value: "amigo_companero", label: "Amigo o compañero" },
  { value: "institucion", label: "Institución educativa" },
  { value: "otro", label: "Otro" },
];

export const SCHOOL_RESPONSIBLE_ROLES: Array<{
  value: ResponsibleRole;
  label: string;
}> = [
  { value: "docente", label: "Docente" },
  { value: "coordinador_academico", label: "Coordinador académico" },
  { value: "director", label: "Director" },
  { value: "encargado_institucional", label: "Encargado institucional" },
  { value: "mentor", label: "Mentor" },
  { value: "otro", label: "Otro" },
];

export const SCHOOL_GRADE_OPTIONS = [
  { value: "7° grado", label: "7° grado" },
  { value: "8° grado", label: "8° grado" },
  { value: "9° grado", label: "9° grado" },
  { value: "1er año de bachillerato", label: "1er año de bachillerato" },
  { value: "2do año de bachillerato", label: "2do año de bachillerato" },
  { value: "3er año de bachillerato", label: "3er año de bachillerato" },
  { value: "otro", label: "Otro" },
];

export const REGISTRATION_STATUS_OPTIONS: Array<{
  value: RegistrationStatus;
  label: string;
}> = [
  { value: "recibida", label: "Recibida" },
  { value: "en_revision", label: "En revisión" },
  { value: "aprobada", label: "Aprobada" },
  { value: "rechazada", label: "Rechazada" },
  { value: "pendiente_correccion", label: "Pendiente de corrección" },
];

export const CATEGORY_OPTIONS: Array<{
  value: RegistrationCategory;
  label: string;
  description: string;
}> = [
  {
    value: "colegios",
    label: "Colegios",
    description: "Para equipos de educación media.",
  },
  {
    value: "universidades",
    label: "Universidades",
    description: "Para equipos de educación superior.",
  },
];