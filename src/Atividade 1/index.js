//-------------------------------------------------------------------------------
/*
  Aluno: Gabriel Nagem Volpini
  Turma: Engenharia da computação 2023

  Descrição do funcionamento:   O programa cria 10 clientes e os conecta no servidor,
  e para cada novo cliente o servidor realiza a conta para calcular o valor de PI 
  e troativamente, por exemplo  um cliente so enviou os dados para o servidor, será
  feita a conta com apenas ele,  mas se logo depois outro cliente enviar a conta será
  feita utilizando o valor do cliente  anterior mais os valores do novo, fazendo 
  assim ate o valor de TOTAL_CLIENT;

  Exemplo de output no final do arquivo;
*/
//-------------------------------------------------------------------------------

import StartServer from './Server.js';
import startClient from './Client.js';

//numero de clientes gerados
const TOTAL_CLIENT = 10;

//inicialização do servidor
const servidor = new StartServer();
servidor.init()

//inicialização dos clientes
for (let i = 0; i !== TOTAL_CLIENT; i++) {
  startClient();
}

/* 
Servidor start
-------------------------------------------------------------------
Current client value:  { acertos: 788835196, tentativas: 251091144 }
Number of clients:  1
Calc =>  3.1416289058765052
PI   =>  3.141592653589793
-------------------------------------------------------------------
Current client value:  { acertos: 724489084, tentativas: 230618044 }
Number of clients:  2
Calc =>  3.1415723795577675
PI   =>  3.141592653589793
-------------------------------------------------------------------
Current client value:  { acertos: 799460992, tentativas: 254485980 }
Number of clients:  3
Calc =>  3.1415382394903193
PI   =>  3.141592653589793
-------------------------------------------------------------------
Current client value:  { acertos: 761516572, tentativas: 242399732 }
Number of clients:  4
Calc =>  3.1415469710704604
PI   =>  3.141592653589793
-------------------------------------------------------------------
Current client value:  { acertos: 769201856, tentativas: 244851841 }
Number of clients:  5
Calc =>  3.1415374051006606
PI   =>  3.141592653589793
-------------------------------------------------------------------
Current client value:  { acertos: 741390660, tentativas: 235995326 }
Number of clients:  6
Calc =>  3.1415391290074415
PI   =>  3.141592653589793
-------------------------------------------------------------------
Current client value:  { acertos: 756918264, tentativas: 240937922 }
Number of clients:  7
Calc =>  3.1415405136245695
PI   =>  3.141592653589793
-------------------------------------------------------------------
Current client value:  { acertos: 738115112, tentativas: 234946750 }
Number of clients:  8
Calc =>  3.14155104328355
PI   =>  3.141592653589793
-------------------------------------------------------------------
Current client value:  { acertos: 781695576, tentativas: 248821228 }
Number of clients:  9
Calc =>  3.1415560738884682
PI   =>  3.141592653589793
-------------------------------------------------------------------
Current client value:  { acertos: 741830792, tentativas: 236125553 }
Number of clients:  10
Calc =>  3.1415681083847087
PI   =>  3.141592653589793
-------------------------------------------------------------------
*/
