import { auth } from "@/lib/auth";
import { getSocialAccounts } from "@/lib/services/social";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const accounts = await getSocialAccounts(session.user.id);

    return NextResponse.json(
      accounts.map((account) => ({
        id: account.id,
        platform: account.platform,
        accountName: account.accountName,
        createdAt: account.createdAt,
      }))
    );
  } catch (error) {
    console.error("Error fetching accounts:", error);
    return NextResponse.json(
      { message: "Algo salió mal" },
      { status: 500 }
    );
  }
}
