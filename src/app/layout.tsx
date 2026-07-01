import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Providers } from "@/components/providers/SessionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "SocialMark - Social Media Marketing Platform",
  description:
    "Manage all your social media campaigns in one place. Create, schedule, and analyze your social media content effortlessly.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
