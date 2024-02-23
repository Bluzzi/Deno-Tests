import { Message, sendMessage } from "discordeno";
import { client } from "#/client.ts";

export function sendReply(message: Message, content: string): void {
  sendMessage(
    client, 
    message.channelId, 
    { 
      content, 
      messageReference: { 
        messageId: message.id, 
        failIfNotExists: true 
      } 
    }
  );
}