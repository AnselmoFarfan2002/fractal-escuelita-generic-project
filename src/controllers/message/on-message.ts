import { Socket } from "socket.io";
import { ChatMessage } from "./types";

export function onMessage(socket: Socket, data: ChatMessage) {
  console.log(data);
  socket.broadcast.emit("message", data);
}
