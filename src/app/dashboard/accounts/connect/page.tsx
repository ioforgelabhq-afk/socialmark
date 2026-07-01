"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlatformCard, platforms } from "@/components/social/PlatformCard";
import { PrerequisitesModal } from "@/components/social/PrerequisitesModal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ConnectSocialPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [showPrerequisites, setShowPrerequisites] = useState(false);

  const handlePlatformClick = (platformId: string) => {
    setSelectedPlatform(platformId);
    setShowPrerequisites(true);
  };

  const handleContinue = () => {
    if (selectedPlatform) {
      // Redirect to OAuth flow
      window.location.href = `/api/social/connect/${selectedPlatform}`;
    }
  };

  const selectedPlatformData = platforms.find(
    (p) => p.id === selectedPlatform
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/accounts">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Conectar Cuenta Social
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Selecciona una plataforma para conectar tu cuenta
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Plataformas Disponibles</CardTitle>
          <CardDescription>
            Elige la plataforma que deseas conectar a SocialMark
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <PlatformCard
                key={platform.id}
                id={platform.id}
                name={platform.name}
                icon={platform.icon}
                onConnect={() => handlePlatformClick(platform.id)}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedPlatformData && (
        <PrerequisitesModal
          platform={selectedPlatformData.name}
          isOpen={showPrerequisites}
          onClose={() => setShowPrerequisites(false)}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}
