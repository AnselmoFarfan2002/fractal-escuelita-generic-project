import { Router } from "express";
import { secureRoute } from "../../middlewares/auth/secure-route";
import fetchGreetings from "../../controllers/greeting/fetch-greetings";
import getGreeting from "../../controllers/greeting/get-greeting";

const ROUTER_GREETING = Router();

ROUTER_GREETING.use(secureRoute);
ROUTER_GREETING.route("/").get(fetchGreetings);
ROUTER_GREETING.route("/:uuid").get(getGreeting);

export default ROUTER_GREETING;
