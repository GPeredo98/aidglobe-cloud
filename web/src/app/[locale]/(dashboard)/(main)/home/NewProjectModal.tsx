"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ControllerRenderProps } from "react-hook-form";
import * as z from "zod";
import { Plus, Loader2 } from "lucide-react";
import { projectSchema } from "@/lib/schemas/project"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function NewProjectModal() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof projectSchema>) {
    setIsSubmitting(true);
    // Simulación de llamada a tu backend de NestJS
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    setIsSubmitting(false);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* Botón siguiendo tu estilo compacto */}
        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-teal-100">
          <Plus size={16} />
          Nuevo Proyecto
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] rounded-[2rem] border-none shadow-2xl p-8">
        <DialogHeader>
          <DialogTitle className="text-xl font-black text-gray-900 tracking-tight">
            Crear Proyecto de Impacto
          </DialogTitle>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-widest mt-1">
            Aidglobe Management
          </p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}