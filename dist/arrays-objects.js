"use strict";
// DESAFIO: Manipulação de Arrays e Objetos
// 1. Crie uma função que receba uma lista de números e retorne uma lista só com os números pares.
// 2. Crie uma função que transforme um array de objetos {nome: string, idade: number} em uma lista só com os nomes de maiores de 18 anos.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvenNumbers = getEvenNumbers;
exports.getAdultsNames = getAdultsNames;
function getEvenNumbers(numbers) {
    // TODO: Retornar apenas os números pares
    return numbers.filter((number) => number % 2 === 0);
}
function getAdultsNames(persons) {
    // TODO: Retornar apenas os nomes de quem tem idade > 18
    return persons.filter(person => person.idade > 18).map(person => person.nome);
}
// Testes rápidos:
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Esperado: [2, 4, 6]
console.log(getAdultsNames([
    { nome: "Ana", idade: 17 },
    { nome: "Bruno", idade: 22 },
    { nome: "Carla", idade: 19 }
])); // Esperado: ["Bruno", "Carla"]
