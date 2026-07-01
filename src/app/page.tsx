import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                SocialMark
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold text-slate-900 dark:text-white sm:text-6xl">
            Manage All Your Social Media{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              in One Place
            </span>
          </h1>
          <p className="mb-8 text-xl text-slate-600 dark:text-slate-400">
            Create, schedule, and analyze your social media content across all
            platforms. Save time and grow your audience faster.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/auth/signup">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
              Powerful Features
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Everything you need to succeed on social media
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Content Creation",
                description:
                  "Create beautiful posts with built-in design tools",
              },
              {
                title: "Smart Scheduling",
                description:
                  "Schedule posts at the perfect time for maximum engagement",
              },
              {
                title: "Analytics Dashboard",
                description:
                  "Track performance with detailed insights and metrics",
              },
              {
                title: "Team Collaboration",
                description:
                  "Work together with approval workflows and comments",
              },
              {
                title: "Content Library",
                description:
                  "Organize templates, images, and copy for easy reuse",
              },
              {
                title: "Social Listening",
                description:
                  "Monitor mentions and stay on top of conversations",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-800"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Transform Your Social Media?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Join thousands of marketers who are growing faster with SocialMark
          </p>
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary">
              Start Your Free Trial Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 text-center text-slate-600 dark:text-slate-400 sm:px-6 lg:px-8">
          <p>&copy; 2026 SocialMark. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
