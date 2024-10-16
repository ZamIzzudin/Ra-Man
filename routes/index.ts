/** @format */

import { Hono } from "hono";
import Blockchain from "./Blockchain";
import PubSub from "./PubSub";

const routes = new Hono();

routes.get("/", (ctx) => {
  return ctx.json({
    message: "Welcome to Ra-Man",
    author: "Yamiyudin",
  });
});

routes.route("/bc", Blockchain);
routes.route("/ps", PubSub);

export default routes;
