import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface AgentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function AgentCard({
  icon: Icon,
  title,
  description,
  buttonText,
  href,
}: AgentCardProps) {
  return (
    <Card className="hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer h-full">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
        </div>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline" className="w-full">
          <Link href={href}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
