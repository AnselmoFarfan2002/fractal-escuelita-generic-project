import express from "express";
import http from "http";
import morgan from "morgan";
import router from "./routes";
import { Server } from "socket.io";
import { initChatSocket } from "./sockets/chat";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", router);

initChatSocket(io);
server.listen(3000, () => console.log("App running on port 3000 🚒"));
