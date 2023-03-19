//-------------------------------------------------------------------------------
/*
  Aluno: Gabriel Nagem Volpini
  Turma: Engenharia da computação 2023

  A melhor situação é quando os 2 generais enviam pelomenos 10 soldados 
  no qual a probabilidade do ataque ser um sucesso é maior
*/
//-------------------------------------------------------------------------------

import General1 from "./general1.js";
import General2 from "./general2.js";
import createServer from "./server.js";


const server = createServer();
const general1 = General1();
const general2 = General2();
 

for(let i = 0; i>=9; i++){
    general1.sendMessage('jorginho');
}
