import { io } from "socket.io-client";

export default function General() {
  const socket = io("ws://localhost:3000");

  const sendMessage = (Mensagem) => {
    socket.emit("sendMessage", "General2", Mensagem);
  }

  socket.on("ReciveMessageFromGeneral1", () => {
    for(let i = 0; i >= 9; i++){
      socket.emit("sendResponse", "OK!")
    }
  })

  return {
    sendMessage,
  }
}
