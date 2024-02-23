import { Application, Router } from "oak";
import { logger } from "@/utils/logger.ts";
import { getNumberEnv } from "@/utils/env.ts";

// Create server and router instances :
const server = new Application();
const router = new Router();

// Timer start middleware :
server.use(async (context, next) => {
  const startTime = Date.now();

  await next();

  if (context.request.url.pathname !== "/favicon.ico") {
    logger.info(`${context.request.method.toUpperCase()} ${context.request.url.pathname} : ${Date.now() - startTime}ms`);
  }
});

// Routes :
router.get("/", async context => {
  await new Promise(resolve => setTimeout(() => resolve(null), 1000));

  context.response.body = "Hello world !";
});

router.get("/:name", context => {
  context.response.body = `Hello ${context.params.name} !`;
});

// Use router middleware :
server.use(router.routes());
server.use(router.allowedMethods());

// Start the server :
server.listen({ port: getNumberEnv("PORT") });
logger.success(`Server listening at http://localhost:${getNumberEnv("PORT")}`);