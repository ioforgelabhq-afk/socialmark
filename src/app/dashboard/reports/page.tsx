"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BarChart3 } from "lucide-react";

const reportTypes = [
  {
    id: 1,
    name: "Reporte de Engagement",
    description: "Análisis detallado de likes, comentarios y compartidos",
    icon: BarChart3,
    dateRange: "Últimos 7 días",
  },
  {
    id: 2,
    name: "Reporte de Audiencia",
    description: "Desglose demográfico de tu audiencia",
    icon: FileText,
    dateRange: "Último mes",
  },
  {
    id: 3,
    name: "Reporte de Desempeño",
    description: "Resumen general de tu presencia en redes sociales",
    icon: BarChart3,
    dateRange: "Último trimestre",
  },
  {
    id: 4,
    name: "Reporte de Competencia",
    description: "Comparación con tus competidores",
    icon: FileText,
    dateRange: "Último mes",
  },
];

export default function ReportsPage() {
  const handleDownload = (reportName: string) => {
    // Mock download
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(`Reporte: ${reportName}\n\nEste es un reporte simulado.`)
    );
    element.setAttribute("download", `${reportName}.txt`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Reportes
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Accede a reportes detallados de tu desempeño en redes sociales
        </p>
      </div>

      {/* Quick Export */}
      <Card>
        <CardHeader>
          <CardTitle>Exportar Datos</CardTitle>
          <CardDescription>
            Descarga tus datos en diferentes formatos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-3">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              CSV
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Excel
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              PDF
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Reports */}
      <div>
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
          Reportes Disponibles
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {reportTypes.map((report) => {
            const Icon = report.icon;
            return (
              <Card key={report.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {report.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {report.description}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mb-4">
                    Período: {report.dateRange}
                  </p>
                  <Button
                    onClick={() => handleDownload(report.name)}
                    className="w-full"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Descargar
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
