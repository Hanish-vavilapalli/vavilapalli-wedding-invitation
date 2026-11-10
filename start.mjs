process.env.HOST = "0.0.0.0";
process.env.NITRO_HOST = "0.0.0.0";
process.env.PORT = process.env.PORT || "3000";

console.log(`[Startup] Binding to ${process.env.HOST}:${process.env.PORT}`);
import("./.output/server/index.mjs");

