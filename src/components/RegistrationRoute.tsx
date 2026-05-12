import { useEffect, useState } from "react";

import type { RegistrationCategory } from "@/lib/types";

import { RegistrationForm } from "./RegistrationForm";

function parseCategory(value: string | null): RegistrationCategory | null {
  if (value === "colegios" || value === "universidades") {
    return value;
  }

  return null;
}

export function RegistrationRoute() {
  const [category, setCategory] = useState<RegistrationCategory | null>(null);
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
    return (
      <div className="rounded-lg border border-csp-soft bg-csp-white p-6 shadow-csp">
        <p className="text-sm text-csp-black/70">Cargando formulario...</p>
      </div>
    );
  }

  return <RegistrationForm category={category} />;
}