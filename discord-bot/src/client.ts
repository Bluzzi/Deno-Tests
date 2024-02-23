import { createBot, startBot, Intents, Bot, Message } from "discordeno";
import { getStringEnv } from "#/utils/env.ts";
import { logger } from "#/utils/logger.ts";
import { sendReply } from "#/utils/discord/message.ts";

export const client = createBot({
  token: getStringEnv("BOT_TOKEN"),
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent
});

client.events.ready = () => {
  logger.success("The client has been started");
};

client.events.messageCreate = (_bot: Bot, message: Message) => {
  if (message.content === "-ping") sendReply(message, "Pong !");
}

await startBot(client);