export default function MonteCarloPi() {
  let acertos = 0;
  let timing = true;

  var startTime = Date.now();
  while ((Date.now() - startTime) < 2000) {

    let x = Math.random();
    let y = Math.random();
    if (x * x + y * y < 1.0) { acertos++; }
    console.count('a')

  }
  return ({ acertos });
}

console.log(MonteCarloPi());

