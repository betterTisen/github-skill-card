const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 5000;

const Card = require("./src/card");

router.get("/api", async (ctx) => {
  const { type = "react", txt = type } = ctx.request.query;

  ctx.set("Content-Type", "image/svg+xml");

  ctx.body = `
    <svg width="92" height="32" xmlns="http://www.w3.org/2000/svg">
      <style>
        .right-txt {
          font-size: 12px;
        }
      </style>
      <rect
        rx="5"
        ry="5"
        x="1"
        y="1"
        width="90"
        height="30"
        style="stroke: #e3e3e3; fill: none;"
      />
      ${Card(type)}
      <text fill="#61DAFB" class="right-txt" x="45" y="21">
      ${txt}
      </text>
    </svg>  
  `;
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(PORT, console.log(`Listening on ${PORT}`));
