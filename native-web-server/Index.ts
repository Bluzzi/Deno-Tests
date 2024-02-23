import { serve } from "https://deno.land/std@0.139.0/http/server.ts";
import Routes from "./Routes.ts";

async function handler(req: Request): Promise<Response> {
  if (Routes.TGM.exec(req.url)) {
    return new Response(await Deno.readFile("./pages/tgm.html"));
  }

  return new Response(await Deno.readFile("./pages/index.html"));
}

serve(handler, { port: 3000 });