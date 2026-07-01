import { z } from "zod";

export const onboardingSchema = z.object({
  role: z.enum([
    "Marketing Manager",
    "Social Media Manager",
    "Business Owner",
    "Freelancer",
    "Agency",
    "Other",
  ]),
  useCases: z.array(
    z.enum([
      "Content Creation",
      "Campaign Management",
      "Analytics & Reporting",
      "Social Listening",
      "Team Collaboration",
      "All of the above",
    ])
  ).min(1, "Select at least one use case"),
  companySize: z.enum([
    "Solo/Individual",
    "2-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees",
  ]),
});

export type OnboardingData = z.infer<typeof onboardingSchema>;
