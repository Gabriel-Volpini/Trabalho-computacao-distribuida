import { io } from "socket.io-client";
import MonteCarloPi from './MonteCarloPi.js'

export default function Client() {
  const socket = io("ws://localhost:3000");
  const UM_MINUTO = 6000;

  const resultado = MonteCarloPi(UM_MINUTO);
  socket.emit("Data", resultado);
}
