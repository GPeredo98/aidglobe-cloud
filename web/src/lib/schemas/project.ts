import * as z from "zod";

export const projectSchema = z.object({
  name: z.string()
    .min(5, "El nombre del proyecto es muy corto")
    .max(50, "El nombre es demasiado largo"),
    
  location: z.string()
    .min(3, "Indica una ubicación válida (ej. Santa Cruz, BO)"),
    
  description: z.string()
    .min(10, "Por favor, danos un poco más de detalle sobre el impacto")
    .max(500, "La descripción no debe exceder los 500 caracteres"),
});