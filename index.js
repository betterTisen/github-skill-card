const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 5000;

const InitFn = require("./src/init");

router.get("/api", async (ctx) => {
  const { type = "react" } = ctx.request.query;

  ctx.set("Content-Type", "image/svg+xml");

  ctx.body = InitFn(type);
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(PORT, console.log(`Listening on http://127.0.0.1:${PORT}`));
