"use strict";
// Compose function simples: sem overloads, mas bem escrito e tipado de forma flexível
function composeFunctions(...functions) {
    return (input) => functions.reduceRight((currentValue, currentFunction) => currentFunction(currentValue), input);
}
/**
 * Função 1: Converte uma string em um array de caracteres
 * Exemplo: "Hello" -> ["H", "e", "l", "l", "o"]
 */
function convertStringToCharacterArray(text) {
    return text.split('');
}
/**
 * Função 2: Inverte a ordem dos caracteres no array
 * Exemplo: ["H", "e", "l", "l", "o"] -> ["o", "l", "l", "e", "H"]
 */
function reverseCharacterArray(characters) {
    return characters.reverse();
}
/**
 * Função 3: Junta um array de caracteres em uma única string
 * Exemplo: ["o", "l", "l", "e", "H"] -> "olleH"
 */
function joinCharacterArrayToString(characters) {
    return characters.join('');
}
// Compondo as funções para criar a função final que inverte a string
const reverseString = composeFunctions(joinCharacterArrayToString, // Recebe string[] e retorna string
reverseCharacterArray, // Recebe string[] e retorna string[]
convertStringToCharacterArray // Recebe string e retorna string[]
);
// Teste
const originalText = 'Hello World';
const reversedText = reverseString(originalText);
console.log(reversedText); // Saída esperada: "dlroW olleH"
