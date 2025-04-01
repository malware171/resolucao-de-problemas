function multiply() {
  let a = 2;
  let b = 1000;

  let soma = a + b;
  let result: number;

  for (let i = b; i <= soma; i++) {
    if (i % a === 0) {
      result = i;
      console.log(result);
    }
  }
}
multiply();

// dia - mes - ano
// 1 - 3 - 25

function validade() {
  const dia = 1;
  const mes = 3;
  const ano = 2025;
}
