import { ConnectionSuccess } from "@/components/social/ConnectionSuccess";
import { Suspense } from "react";

interface ConnectedPageProps {
  searchParams: {
    platform?: string;
    account?: string;
  };
}

export default function ConnectedPage({ searchParams }: ConnectedPageProps) {
  const platform = searchParams.platform || "Social Media";
  const account = searchParams.account || "Tu Cuenta";

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ConnectionSuccess platform={platform} accountName={account} />
    </Suspense>
  );
}
