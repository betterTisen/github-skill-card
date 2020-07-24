const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 5000;

const Icon = require("./icon");
const Font = require("./font");

router.get("/api", async (ctx) => {
  const { type = "react" } = ctx.request.query;

  ctx.set("Content-Type", "image/svg+xml");

  ctx.body = `
    <svg width="92" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect
        rx="5"
        ry="5"
        x="1"
        y="1"
        width="90"
        height="30"
        style="stroke: #e3e3e3; fill: none;"
      />
      ${Icon[type]}
      ${Font[type]}
    </svg>  
  `
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(PORT, console.log(`Listening on http://127.0.0.1:${PORT}`));
