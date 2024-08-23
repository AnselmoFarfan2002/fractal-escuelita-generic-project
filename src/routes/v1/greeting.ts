import { Router } from "express";
import { getGreeting } from "../../controllers/greeting/get";
import { secureRoute } from "../../middlewares/auth/secure-route";

const ROUTER_GREETING = Router();

ROUTER_GREETING.use(secureRoute);
ROUTER_GREETING.route("/").get(getGreeting);

export default ROUTER_GREETING;
