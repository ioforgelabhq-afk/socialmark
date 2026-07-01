"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface PrerequisitesModalProps {
  platform: string;
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const prerequisites: Record<string, string[]> = {
  facebook: [
    "Tienes una Página de Facebook",
    "Eres administrador de la página",
    "Tu cuenta está verificada",
  ],
  instagram: [
    "Tienes una cuenta de Instagram Business",
    "Tu cuenta está vinculada a una Página de Facebook",
    "Tienes acceso de administrador",
  ],
  twitter: [
    "Tienes una cuenta de Twitter/X",
    "Tu cuenta está verificada",
    "Tienes acceso a la API",
  ],
  linkedin: [
    "Tienes una cuenta de LinkedIn",
    "Tienes acceso a una Página de Empresa",
    "Eres administrador de la página",
  ],
  tiktok: [
    "Tienes una cuenta de TikTok Business",
    "Tu cuenta está verificada",
    "Tienes acceso al Kit de Desarrolladores",
  ],
  youtube: [
    "Tienes un canal de YouTube",
    "Tu canal está verificado",
    "Tienes acceso a YouTube Studio",
  ],
};

export function PrerequisitesModal({
  platform,
  isOpen,
  onClose,
  onContinue,
}: PrerequisitesModalProps) {
  const items = prerequisites[platform.toLowerCase()] || [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Requisitos Previos</DialogTitle>
          <DialogDescription>
            Asegúrate de cumplir con estos requisitos antes de continuar
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 my-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                {item}
              </span>
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={onContinue}>
            Entiendo, Continuar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
