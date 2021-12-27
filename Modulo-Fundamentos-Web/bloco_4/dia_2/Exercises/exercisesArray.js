let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for(let number of numbers) {
    console.log(number);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}
console.log(sum);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;
for(let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    average = sum / numbers.length;
}
console.log(average);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20".Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    average = sum / numbers.length;
};
if (average > 20) {
    console.log('Valor maior que 20');
} else if (average <= 20) {
    console.log('Valor menor que 20');
};
console.log(average);

// Utilizando for , descubra qual o maior valor contido no array e imprima - o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maxValue = 0;
for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] > maxValue) {
        maxValue = numbers[index]
    }
}
console.log(maxValue);

// Descubra quantos valores ímpares existem no array e imprima o resultado.Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
let numbers = [6, 2, 4, 18, 70, 8, 100, 2, 34, 26];
let numbersOdd = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        numbersOdd += 1;
    } 
}
    if(numbersOdd === 0) {
      console.log('nenhum valor ímpar encontrado');
    } else {
        console.log(numbersOdd);
    }

// Utilizando for , descubra qual o menor valor contido no array e imprima - o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minValue = 100;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < minValue) {
        minValue = numbers[index]
    }
}
console.log(minValue);

