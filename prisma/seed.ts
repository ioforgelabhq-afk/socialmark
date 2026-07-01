import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.conversation.deleteMany();
  await prisma.socialAccount.deleteMany();
  await prisma.user.deleteMany();

  // Create demo user
  const hashedPassword = await bcrypt.hash("demo123456", 10);

  const user = await prisma.user.create({
    data: {
      email: "demo@example.com",
      password: hashedPassword,
      name: "Demo User",
      onboardingData: JSON.stringify({
        role: "Marketing Manager",
        useCases: ["Content Creation", "Campaign Management"],
        companySize: "11-50 employees",
      }),
    },
  });

  console.log("✓ Seed data created successfully");
  console.log(`Created user: ${user.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
