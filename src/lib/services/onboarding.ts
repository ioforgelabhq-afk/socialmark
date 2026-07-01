import { db } from "@/lib/db";
import { OnboardingData } from "@/lib/schemas/onboarding";

export async function saveOnboardingData(userId: string, data: OnboardingData) {
  return db.user.update({
    where: { id: userId },
    data: {
      onboardingData: JSON.stringify(data),
    },
  });
}

export async function getOnboardingData(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { onboardingData: true },
  });

  if (!user?.onboardingData) {
    return null;
  }

  return JSON.parse(user.onboardingData) as OnboardingData;
}
