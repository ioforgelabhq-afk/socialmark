"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function Topbar() {
  const { data: session } = useSession();

  return (
    <header className="fixed right-0 top-0 z-30 h-16 border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-950 md:left-64">
      <div className="flex h-full items-center justify-between">
        <div className="pt-16 md:pt-0" />
        <div className="flex items-center gap-4">
          {session?.user && (
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  {session.user.name || "User"}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {session.user.email}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => signOut({ redirectTo: "/" })}
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
