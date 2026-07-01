import { auth } from "@/lib/auth";
import { deleteSocialAccount } from "@/lib/services/social";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const result = await deleteSocialAccount(params.id, session.user.id);

    if (result.count === 0) {
      return NextResponse.json(
        { message: "Cuenta no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Cuenta desconectada exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting account:", error);
    return NextResponse.json(
      { message: "Algo salió mal" },
      { status: 500 }
    );
  }
}
