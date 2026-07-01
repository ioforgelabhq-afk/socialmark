"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface SocialAccount {
  id: string;
  platform: string;
  accountName: string;
  createdAt: string;
}

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<SocialAccount[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await fetch("/api/social/accounts");
      if (response.ok) {
        const data = await response.json();
        setAccounts(data);
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (accountId: string) => {
    if (!confirm("¿Estás seguro de que deseas desconectar esta cuenta?")) {
      return;
    }

    try {
      const response = await fetch(`/api/social/accounts/${accountId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Cuenta desconectada exitosamente");
        setAccounts(accounts.filter((a) => a.id !== accountId));
      } else {
        toast.error("Error al desconectar la cuenta");
      }
    } catch (error) {
      toast.error("Algo salió mal");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Cuentas Sociales
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Administra tus cuentas de redes sociales conectadas
          </p>
        </div>
        <Link href="/dashboard/accounts/connect">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Conectar Cuenta
          </Button>
        </Link>
      </div>

      {loading ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-slate-600 dark:text-slate-400">Cargando cuentas...</p>
          </CardContent>
        </Card>
      ) : accounts.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Sin cuentas conectadas</CardTitle>
            <CardDescription>
              Conecta tu primera cuenta de redes sociales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Las cuentas conectadas aparecerán aquí
            </p>
            <Link href="/dashboard/accounts/connect">
              <Button>Conectar Primera Cuenta</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {accounts.map((account) => (
            <Card key={account.id}>
              <CardContent className="pt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {account.accountName}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                    {account.platform}
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(account.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
