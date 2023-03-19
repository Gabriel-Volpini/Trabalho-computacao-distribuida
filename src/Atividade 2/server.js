export function createServer(){

    const servidor = new Server(3000);

    servidor.on("connection", (socket) => {
        const soldados = {
            ['General1']: 100,
            ['General2']: 100
        }

        socket.on("sendMessage", (...args) => {
            const chance = Math.random() * 10;
            soldados[args[0]] = soldados[args[0]] - 1;
            
            if (chance <= 2 ){ //30% de chance
                socket.broadcast.emit(`ReciveMessageFrom${args[0]}`, args[1])
            } 
            
        });

        socket.on("sendResponse", (...arg) => {
            console.log('resposta')
            const chance = Math.random() * 10;

            if (chance <= 2 ){ //30% de chance
                console.log("ATAQUE CONFIRMADO!");
                const exercito = soldados['General1'] + soldados['General2'];

                if(exercito >= 180){
                    console.log('Ataque bem sucedido!');
                } else if(exercito >= 150){
                    console.log('80% de chance...');
                    if(Math.random()*10 >= 7){
                        console.log("Sucesso");
                    }else{
                        console.log("Falhou");
                    }
                    
                } else{
                    console.log("Ataque falhou!")
                }

            } 
        })
    });
}
