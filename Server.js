import { Server } from "socket.io";

export default class CreateServer {
  servidor = null;
  db = [];

  init() {
    console.log('Servidor start');
    console.log("-------------------------------------------------------------------")

    //inicialização do server
    this.servidor = new Server(3000);

    //Escutando o client q conectar
    this.servidor.on("connection", (socket) => {

      socket.on("Data", (...args) => {
        //salva o valor do client calculado
        this.db.push(args[0]);

        //faz o calculo utilizando todos os clientes disponiveis ate o momento
        this.printValues(args[0]);

      });
    });
  }

  printValues(recived) {
    console.log('Current client value: ', recived);
    console.log('Number of clients: ', this.db.length)
    console.log(`Calc => `, this.calcPI())
    console.log(`PI   => `, Math.PI)
    console.log("-------------------------------------------------------------------")
  }

  calcPI() {
    return this.getAllAcertos() / this.getAllTentativas();
  }

  getAllAcertos() {
    return this.db.map(a => a.acertos).reduce((a, b) => a + b)
  }

  getAllTentativas() {
    return this.db.map(a => a.tentativas).reduce((a, b) => a + b)
  }

}