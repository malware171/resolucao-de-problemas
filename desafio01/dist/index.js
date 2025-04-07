"use strict";
function closestToMidnight(num1, num2, num3, num4) {
    let numbers = [num1, num2, num3, num4];
    numbers.sort();
    console.log(numbers);
    // HH:MM
    // 23:59
    if (numbers.includes(1) === false || numbers.includes(2) === false) {
        return "Não serão fornecidos, pois não proporcionam uma resposta válida.";
    }
    let horas = [];
    let concatenar2;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            let concatenar = numbers[i].toString() + numbers[j].toString(); // ver algum metodo que vai concatenar
            concatenar2 = parseInt(concatenar);
            if (concatenar2 < 23 && numbers[i] !== numbers[j]) {
                horas.push(concatenar2);
            }
        }
    }
    // HORAS SEPARADA
    // SEPARADO POSIBILIDADES DE MINUTOS
    let minutos = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            let concatenar = numbers[i].toString() + numbers[j].toString(); // ver algum metodo que vai concatenar
            concatenar2 = parseInt(concatenar);
            if (concatenar2 < 59 && numbers[i] !== numbers[j]) {
                minutos.push(concatenar2);
            }
        }
    }
    // MINUTOS SEPARADOS
    horas.reverse();
    minutos.reverse();
    console.log(horas);
    console.log(minutos);
    let horario = {};
    for (let horasIndex = 0; horasIndex < horas.length; horasIndex++) { }
}
closestToMidnight(6, 4, 2, 1);
