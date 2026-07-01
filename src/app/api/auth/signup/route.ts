import { createUser, getUserByEmail } from "@/lib/services/user";
import { signUpSchema } from "@/lib/schemas/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = signUpSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { 
          message: "Invalid input", 
          errors: validation.error.errors 
        },
        { status: 400 }
      );
    }

    const { email, password, name } = validation.data;

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 }
      );
    }

    const user = await createUser(email, password, name);

    return NextResponse.json(
      { message: "Account created successfully", user: { id: user.id, email: user.email } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
