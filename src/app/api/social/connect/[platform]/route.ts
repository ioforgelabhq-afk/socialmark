import { auth } from "@/lib/auth";
import { createSocialAccount } from "@/lib/services/social";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

// Mock OAuth tokens for demo purposes
const mockTokens: Record<string, { token: string; refreshToken?: string }> = {
  facebook: {
    token: "mock_fb_token_" + Date.now(),
    refreshToken: "mock_fb_refresh_" + Date.now(),
  },
  instagram: {
    token: "mock_ig_token_" + Date.now(),
    refreshToken: "mock_ig_refresh_" + Date.now(),
  },
  twitter: {
    token: "mock_tw_token_" + Date.now(),
    refreshToken: "mock_tw_refresh_" + Date.now(),
  },
  linkedin: {
    token: "mock_li_token_" + Date.now(),
    refreshToken: "mock_li_refresh_" + Date.now(),
  },
  tiktok: {
    token: "mock_tt_token_" + Date.now(),
    refreshToken: "mock_tt_refresh_" + Date.now(),
  },
  youtube: {
    token: "mock_yt_token_" + Date.now(),
    refreshToken: "mock_yt_refresh_" + Date.now(),
  },
};

const mockAccountNames: Record<string, string> = {
  facebook: "Mi Página de Facebook",
  instagram: "mi_cuenta_instagram",
  twitter: "@mi_cuenta_twitter",
  linkedin: "Mi Página de Empresa",
  tiktok: "@mi_tiktok",
  youtube: "Mi Canal de YouTube",
};

export async function GET(
  request: NextRequest,
  { params }: { params: { platform: string } }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    const platform = params.platform.toLowerCase();

    if (!mockTokens[platform]) {
      return NextResponse.redirect(
        new URL("/dashboard/accounts/connect", request.url)
      );
    }

    // Simulate OAuth flow
    const tokens = mockTokens[platform];
    const accountName = mockAccountNames[platform];
    const platformId = `${platform}_${Date.now()}`;

    // Save the social account
    await createSocialAccount(
      session.user.id,
      platform,
      platformId,
      accountName,
      tokens.token,
      tokens.refreshToken,
      new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      {
        connectedAt: new Date().toISOString(),
        platform: platform,
      }
    );

    // Redirect to success page
    return NextResponse.redirect(
      new URL(
        `/dashboard/accounts/connected?platform=${platform}&account=${encodeURIComponent(accountName)}`,
        request.url
      )
    );
  } catch (error) {
    console.error("Social connection error:", error);
    return NextResponse.redirect(
      new URL("/dashboard/accounts/connect?error=connection_failed", request.url)
    );
  }
}
