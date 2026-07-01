import { db } from "@/lib/db";

export interface ConversationMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export async function createConversation(
  userId: string,
  messages: ConversationMessage[]
) {
  return db.conversation.create({
    data: {
      userId,
      messages: JSON.stringify(messages),
    },
  });
}

export async function getConversations(userId: string) {
  const conversations = await db.conversation.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return conversations.map((conv) => ({
    ...conv,
    messages: JSON.parse(conv.messages) as ConversationMessage[],
  }));
}

export async function updateConversation(
  conversationId: string,
  userId: string,
  messages: ConversationMessage[]
) {
  return db.conversation.updateMany({
    where: {
      id: conversationId,
      userId,
    },
    data: {
      messages: JSON.stringify(messages),
    },
  });
}

export async function deleteConversation(
  conversationId: string,
  userId: string
) {
  return db.conversation.deleteMany({
    where: {
      id: conversationId,
      userId,
    },
  });
}
