"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { OnboardingData, onboardingSchema } from "@/lib/schemas/onboarding";
import StepOne from "@/components/onboarding/StepOne";
import StepTwo from "@/components/onboarding/StepTwo";
import StepThree from "@/components/onboarding/StepThree";
import { ProgressBar } from "@/components/onboarding/ProgressBar";

export default function OnboardingClient() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<OnboardingData>>({
    role: undefined,
    useCases: [],
    companySize: undefined,
  });

  const handleNext = async () => {
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    // Save onboarding data
    setLoading(true);
    try {
      const validation = onboardingSchema.safeParse(formData);
      if (!validation.success) {
        toast.error("Please complete all steps");
        return;
      }

      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      if (!response.ok) {
        toast.error("Failed to save onboarding data");
        return;
      }

      toast.success("Welcome to SocialMark!");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 dark:from-slate-950 dark:to-slate-900">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600" />
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                SocialMark
              </span>
            </div>
          </div>

          <div className="mb-6">
            <ProgressBar current={step} total={3} />
          </div>

          <CardTitle className="text-2xl">
            {step === 1 && "What describes you best?"}
            {step === 2 && "How do you plan to use SocialMark?"}
            {step === 3 && "What&apos;s your company size?"}
          </CardTitle>
          <CardDescription>
            {step === 1 &&
              "Help us understand your role to personalize your experience"}
            {step === 2 && "Select all that apply to your workflow"}
            {step === 3 && "This helps us tailor features for your needs"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === 1 && (
            <StepOne
              value={formData.role}
              onChange={(role: string) => setFormData({ ...formData, role: role as any })}
            />
          )}

          {step === 2 && (
            <StepTwo
              value={formData.useCases || []}
              onChange={(useCases: string[]) =>
                setFormData({ ...formData, useCases: useCases as any })
              }
            />
          )}

          {step === 3 && (
            <StepThree
              value={formData.companySize}
              onChange={(companySize: string) =>
                setFormData({ ...formData, companySize: companySize as any })
              }
            />
          )}

          <div className="flex gap-4 pt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1 || loading}
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={loading}
              className="flex-1"
            >
              {loading ? "Saving..." : step === 3 ? "Complete" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
