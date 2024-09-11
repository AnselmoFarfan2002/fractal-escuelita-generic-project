// src/sockets/chatSocket.ts

import { Server, Socket } from "socket.io";
import { onMessage } from "../controllers/message/on-message";

export const initChatSocket = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log("new connection 🦹")
    socket.on("message", (data) => onMessage(socket, data));
    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
  });
};
