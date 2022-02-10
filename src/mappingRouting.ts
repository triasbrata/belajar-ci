import Router from "@koa/router";

export function mappingRouting(route: Router) {
  route.get("/test", (ctx) => {
    ctx.body = { hello: "World" };
    ctx.type = "application/json";
    ctx.status = 400;
  });
}
