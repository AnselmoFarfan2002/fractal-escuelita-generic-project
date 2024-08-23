import { Router } from "express";
import ROUTER_GREETING from "./greeting";

const V1_ROUTES = Router();

V1_ROUTES.use("/greeting", ROUTER_GREETING);

export default V1_ROUTES;
