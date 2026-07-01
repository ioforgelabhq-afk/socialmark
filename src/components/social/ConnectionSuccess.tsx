"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ConnectionSuccessProps {
  platform: string;
  accountName: string;
}

export function ConnectionSuccess({
  platform,
  accountName,
}: ConnectionSuccessProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-400" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              ¡Conectado Exitosamente!
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Tu cuenta de {platform} ha sido conectada
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Cuenta Conectada
            </p>
            <p className="font-semibold text-slate-900 dark:text-white">
              {accountName}
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Link href="/dashboard/accounts">
              <Button variant="outline" className="w-full">
                Ver Cuentas
              </Button>
            </Link>
            <Link href="/dashboard/accounts/connect">
              <Button className="w-full">
                Conectar Otra
              </Button>
            </Link>
          </div>

          <Link href="/dashboard">
            <Button variant="ghost" className="w-full">
              Ir al Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
