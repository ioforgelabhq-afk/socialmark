import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Zap, BarChart3, Palette, Wand2, Plus, TrendingUp, Calendar, MessageSquare } from "lucide-react";
import { ChatInterface } from "@/components/dashboard/ChatInterface";
import { AgentCard } from "@/components/dashboard/AgentCard";

export default async function DashboardPage() {
  const session = await auth();

  const agents = [
    {
      icon: Zap,
      title: "Crear Campaña",
      description: "Crea y lanza nuevas campañas en redes sociales",
      buttonText: "Empezar Campaña",
      href: "/dashboard/campaigns",
    },
    {
      icon: BarChart3,
      title: "Analizar Situación",
      description: "Obtén información sobre tu desempeño actual",
      buttonText: "Ver Análisis",
      href: "/dashboard/analytics",
    },
    {
      icon: Palette,
      title: "Diseñador",
      description: "Crea publicaciones hermosas con diseño impulsado por IA",
      buttonText: "Abrir Diseñador",
      href: "/dashboard/content-studio",
    },
    {
      icon: Wand2,
      title: "Generador de Contenido",
      description: "Genera contenido atractivo para tus publicaciones",
      buttonText: "Generar Contenido",
      href: "/dashboard/content-studio",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          ¡Bienvenido, {session?.user?.name || "Usuario"}! 👋
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Hagamos crecer tu presencia en redes sociales
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">0</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Cuentas Conectadas
                </p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">0</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Campañas Activas
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">0</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Publicaciones Programadas
                </p>
              </div>
              <Calendar className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column - Agent Cards */}
        <div className="lg:col-span-2 space-y-6">
          {/* Get Started */}
          <Card>
            <CardHeader>
              <CardTitle>Empezar</CardTitle>
              <CardDescription>
                Conecta tu primera cuenta de redes sociales para comenzar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/accounts">
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Conectar Cuenta Social
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Agent Cards */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Acciones Rápidas
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {agents.map((agent) => (
                <AgentCard
                  key={agent.title}
                  icon={agent.icon}
                  title={agent.title}
                  description={agent.description}
                  buttonText={agent.buttonText}
                  href={agent.href}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Chat */}
        <div>
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
