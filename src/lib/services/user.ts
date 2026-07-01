import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function createUser(
  email: string,
  password: string,
  name?: string
) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
}

export async function getUserByEmail(email: string) {
  return db.user.findUnique({
    where: { email },
  });
}

export async function getUserById(id: string) {
  return db.user.findUnique({
    where: { id },
    include: {
      accounts: true,
      conversations: true,
    },
  });
}

export async function updateUser(
  id: string,
  data: {
    name?: string;
    image?: string;
    onboardingData?: any;
  }
) {
  return db.user.update({
    where: { id },
    data,
  });
}
