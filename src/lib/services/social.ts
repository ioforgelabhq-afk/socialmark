import { db } from "@/lib/db";
import { encrypt, decrypt } from "@/lib/crypto";

export async function createSocialAccount(
  userId: string,
  platform: string,
  platformId: string,
  accountName: string,
  accessToken: string,
  refreshToken?: string,
  expiresAt?: Date,
  metadata?: Record<string, any>
) {
  const encryptedAccessToken = encrypt(accessToken);
  const encryptedRefreshToken = refreshToken ? encrypt(refreshToken) : undefined;

  return db.socialAccount.create({
    data: {
      userId,
      platform,
      platformId,
      accountName,
      accessToken: encryptedAccessToken,
      refreshToken: encryptedRefreshToken,
      expiresAt,
      metadata: metadata ? JSON.stringify(metadata) : undefined,
    },
  });
}

export async function getSocialAccounts(userId: string) {
  const accounts = await db.socialAccount.findMany({
    where: { userId },
  });

  return accounts.map((account) => ({
    ...account,
    accessToken: decrypt(account.accessToken),
    refreshToken: account.refreshToken
      ? decrypt(account.refreshToken)
      : undefined,
    metadata: account.metadata ? JSON.parse(account.metadata) : undefined,
  }));
}

export async function deleteSocialAccount(accountId: string, userId: string) {
  return db.socialAccount.deleteMany({
    where: {
      id: accountId,
      userId,
    },
  });
}

export async function getSocialAccount(accountId: string, userId: string) {
  const account = await db.socialAccount.findFirst({
    where: {
      id: accountId,
      userId,
    },
  });

  if (!account) {
    return null;
  }

  return {
    ...account,
    accessToken: decrypt(account.accessToken),
    refreshToken: account.refreshToken
      ? decrypt(account.refreshToken)
      : undefined,
    metadata: account.metadata ? JSON.parse(account.metadata) : undefined,
  };
}
