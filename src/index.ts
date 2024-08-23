import express from "express";
import morgan from "morgan";
import router from "./routes";

const app = express();

app.use(morgan("dev"));

app.use("/api", router);
app.listen(3000, () => console.log("App running on port 3000 🚒"));
