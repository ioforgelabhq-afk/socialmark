"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Palette, Wand2 } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Publicación Inspiradora",
    description: "Cita inspiradora con imagen de fondo",
    icon: Wand2,
  },
  {
    id: 2,
    name: "Anuncio de Producto",
    description: "Destaca tu nuevo producto",
    icon: Palette,
  },
  {
    id: 3,
    name: "Historia de Éxito",
    description: "Comparte un caso de éxito",
    icon: Wand2,
  },
  {
    id: 4,
    name: "Pregunta al Público",
    description: "Involucra a tu audiencia",
    icon: Palette,
  },
];

export default function ContentStudioPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Estudio de Contenido
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Crea contenido hermoso con herramientas impulsadas por IA
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Post
        </Button>
      </div>

      {/* Design Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Herramientas de Diseño</CardTitle>
          <CardDescription>
            Elige una herramienta para empezar a crear
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" className="h-24 flex-col gap-2">
              <Palette className="h-6 w-6" />
              <span>Diseñador Visual</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2">
              <Wand2 className="h-6 w-6" />
              <span>Generador de Contenido</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Templates */}
      <div>
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
          Plantillas Disponibles
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <Card
                key={template.id}
                className="hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {template.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {template.description}
                      </p>
                      <Button variant="ghost" size="sm" className="mt-3 w-full">
                        Usar Plantilla
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
