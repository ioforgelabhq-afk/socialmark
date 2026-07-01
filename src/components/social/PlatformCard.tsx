"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Linkedin, Music, Youtube } from "lucide-react";

interface PlatformCardProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  onConnect: () => void;
}

export function PlatformCard({ name, icon, onConnect }: PlatformCardProps) {
  return (
    <Card className="hover:border-blue-500 hover:shadow-lg transition-all">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="h-12 w-12 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="font-semibold text-slate-900 dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Conecta tu cuenta de {name}
        </p>
        <Button onClick={onConnect} className="w-full">
          Conectar
        </Button>
      </CardContent>
    </Card>
  );
}

export const platforms = [
  {
    id: "facebook",
    name: "Facebook",
    icon: <Facebook className="h-12 w-12" />,
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: <Instagram className="h-12 w-12" />,
  },
  {
    id: "twitter",
    name: "Twitter/X",
    icon: <Twitter className="h-12 w-12" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: <Linkedin className="h-12 w-12" />,
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: <Music className="h-12 w-12" />,
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: <Youtube className="h-12 w-12" />,
  },
];
