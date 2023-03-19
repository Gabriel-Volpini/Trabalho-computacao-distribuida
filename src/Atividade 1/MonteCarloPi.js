export default function MonteCarloPi(tempo) {
  let acertos = 0;
  let tentativas = 0;

  var startTime = Date.now();
  while (Math.abs(startTime - Date.now()) <= tempo) {
    let x = Math.random();
    let y = Math.random();
    tentativas++;
    if (x * x + y * y < 1.0) {
      acertos++;
    }
  }
  return { acertos: 4 * acertos, tentativas };
}