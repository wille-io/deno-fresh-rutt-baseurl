import { serve } from "https://deno.land/std@0.152.0/http/server.ts";
//import { router } from "https://deno.land/x/rutt/mod.ts";
import { Handler, router } from "../mod.ts"; // local rutt


const leHandler : Handler = (_req, _ctx) => 
{
  //console.log("_req", _req);
  return new Response("Test!", { status: 200 });
};


const leRouter = router(
  //{ pattern: new RegExp("/test$"), methods: { GET: leHandler } }, // regexp tests
  { "/test": leHandler }, // URLPattern tests

undefined, undefined, undefined, { basePath: "/blub/test" } // basePath tests
);


await serve(
  leRouter, 
  { port: 3000 }
);
