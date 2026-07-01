"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar } from "lucide-react";

const upcomingPosts = [
  {
    id: 1,
    content: "¡Nuevo blog post sobre estrategia de contenido!",
    platforms: ["Facebook", "Twitter"],
    scheduledTime: "2024-07-05 10:00",
  },
  {
    id: 2,
    content: "Comparte tu historia con nosotros",
    platforms: ["Instagram"],
    scheduledTime: "2024-07-06 15:30",
  },
];

export default function SchedulerPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Programador
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Ver y gestionar tus publicaciones programadas
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Programar Publicación
        </Button>
      </div>

      {/* Calendar View */}
      <Card>
        <CardHeader>
          <CardTitle>Calendario de Publicaciones</CardTitle>
          <CardDescription>
            Vista general de tus publicaciones programadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-12">
            <div className="text-center space-y-4">
              <Calendar className="h-16 w-16 text-slate-400 dark:text-slate-600 mx-auto" />
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Calendario Interactivo
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                El calendario detallado estará disponible próximamente
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Próximas Publicaciones</CardTitle>
          <CardDescription>
            Publicaciones programadas para los próximos días
          </CardDescription>
        </CardHeader>
        <CardContent>
          {upcomingPosts.length === 0 ? (
            <p className="text-slate-600 dark:text-slate-400">
              Sin publicaciones programadas
            </p>
          ) : (
            <div className="space-y-4">
              {upcomingPosts.map((post) => (
                <div
                  key={post.id}
                  className="border rounded-lg p-4 dark:border-slate-700"
                >
                  <p className="font-medium text-slate-900 dark:text-white mb-2">
                    {post.content}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex gap-2">
                      {post.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                    <span className="text-slate-500 dark:text-slate-400">
                      {post.scheduledTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
