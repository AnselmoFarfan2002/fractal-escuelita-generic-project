import { Router } from "express";
import { secureRoute } from "../../middlewares/auth/secure-route";
import fetchGreetings from "../../controllers/greeting/fetch-greetings";
import getGreeting from "../../controllers/greeting/get-greeting";
import createGreeting from "../../controllers/greeting/create-greeting";
import validator from "../../middlewares/validator";
import { GreetingCommandSchema } from "../../services/greeting/types";

const ROUTER_GREETING = Router();

ROUTER_GREETING.use(secureRoute);

ROUTER_GREETING.route("/")
  .get(fetchGreetings)
  .post(validator(GreetingCommandSchema), createGreeting);

ROUTER_GREETING.route("/:uuid").get(getGreeting);

export default ROUTER_GREETING;
