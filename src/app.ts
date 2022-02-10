require("dotenv").config();
import bodyParser from "koa-bodyparser";
import Koa from "koa";
import Router from "@koa/router";
import { mappingRouting } from "./mappingRouting";

export const app = new Koa();
const router = new Router();
export const PORT: number = Number(process.env.PORT) || 8000;
export const HOST: string = process.env.HOST || "0.0.0.0";
mappingRouting(router);
app.use(bodyParser({})).use(router.routes()).use(router.allowedMethods());
