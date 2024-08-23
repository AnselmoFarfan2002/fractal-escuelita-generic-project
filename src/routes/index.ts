import { Router } from "express";
import V1_ROUTES from "./v1";

const router = Router();

router.use("/v1", V1_ROUTES);

export default router;
