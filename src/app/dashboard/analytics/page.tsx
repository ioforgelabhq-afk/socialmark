"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const engagementData = [
  { date: "Lun", likes: 240, comentarios: 24, compartidos: 24 },
  { date: "Mar", likes: 320, comentarios: 35, compartidos: 28 },
  { date: "Mié", likes: 280, comentarios: 28, compartidos: 32 },
  { date: "Jue", likes: 400, comentarios: 40, compartidos: 45 },
  { date: "Vie", likes: 480, comentarios: 48, compartidos: 38 },
  { date: "Sab", likes: 520, comentarios: 52, compartidos: 55 },
  { date: "Dom", likes: 450, comentarios: 45, compartidos: 42 },
];

const platformData = [
  { name: "Facebook", value: 35 },
  { name: "Instagram", value: 25 },
  { name: "Twitter", value: 20 },
  { name: "LinkedIn", value: 12 },
  { name: "TikTok", value: 8 },
];

const COLORS = ["#3b82f6", "#ec4899", "#f59e0b", "#10b981", "#8b5cf6"];

const followerGrowth = [
  { mes: "Ene", seguidores: 1000 },
  { mes: "Feb", seguidores: 1200 },
  { mes: "Mar", seguidores: 1450 },
  { mes: "Abr", seguidores: 1800 },
  { mes: "May", seguidores: 2100 },
  { mes: "Jun", seguidores: 2450 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Analítica
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Rastrear el rendimiento en todas tus cuentas sociales
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Total de Seguidores
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                2,450
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                +12% desde el mes pasado
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Alcance Total
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                12,847
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                +8% desde la semana pasada
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Engagement Total
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                2,394
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                +5.2% desde hoy
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Tasa de Engagement
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                4.8%
              </p>
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                -0.3% desde la semana pasada
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Engagement Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Tendencia de Engagement</CardTitle>
            <CardDescription>
              Likes, comentarios y compartidos en la última semana
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="likes"
                  stroke="#3b82f6"
                  name="Me gusta"
                />
                <Line
                  type="monotone"
                  dataKey="comentarios"
                  stroke="#ec4899"
                  name="Comentarios"
                />
                <Line
                  type="monotone"
                  dataKey="compartidos"
                  stroke="#10b981"
                  name="Compartidos"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Platform Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución por Plataforma</CardTitle>
            <CardDescription>
              Engagement por red social
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {platformData.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Follower Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Crecimiento de Seguidores</CardTitle>
          <CardDescription>
            Historial de crecimiento en los últimos 6 meses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={followerGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="seguidores" fill="#3b82f6" name="Seguidores" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
