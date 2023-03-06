import { Server } from "socket.io";
import { io } from "socket.io-client";

function MonteCarloPi(n) {
  let acertos = 0;

  for (let i = 0; i < n; i++) {
    let x = Math.random();
    let y = Math.random();

    if (x * x + y * y < 1.0) {
      acertos++;
    }
  }
  return (4.0 * acertos / n);
}

const serv = new Server(3000);
serv.on("connection", (socket) => {
  // send a message to the client
  socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // receive a message from the client
  socket.on("hello from client", (...args) => {
    console.log("Servidor - recebeu cliente")
  });

});

const socket = io("ws://localhost:3000");

// send a message to the server
socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

// receive a message from the server
socket.on("hello from server", (...args) => {
  console.log("cliente - recebeu server")
});


console.log(MonteCarloPi(1000000));
