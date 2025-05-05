"use strict";
// generics-functions-examples.ts
// ===== BÁSICO: Generic Function simples =====
// Uma função que recebe qualquer tipo e retorna o mesmo tipo.
// Quando usar: Quando você quer reutilizar a mesma lógica para diferentes tipos de dados.
function identity(value) {
    return value;
}
// Exemplos de uso:
const num = identity(10); // T inferido como number
const str = identity("Hello"); // T inferido como string
const bool = identity(true); // T inferido como boolean
console.log(num, str, bool);
// ===== VÁRIOS TYPES: Multiplos Generics =====
// Quando usar: Quando a função trabalha com mais de um tipo genérico.
function pair(first, second) {
    return [first, second];
}
const userAge = pair("Augustus", 30);
console.log(userAge);
// ===== CONSTRAINTS: Limitando tipos com extends =====
// Quando usar: Quando você quer garantir que só aceita tipos com uma propriedade específica.
function getLength(item) {
    return item.length;
}
console.log(getLength("Test")); // Ok (string tem length)
console.log(getLength([1, 2, 3])); // Ok (array tem length)
// getLength(10); // Erro! number não tem length
// ===== DEFAULT GENERICS: Tipos padrões =====
// Quando usar: Quando você quer fornecer um tipo padrão caso o usuário não especifique.
function getValueOrDefault(value) {
    if (value === undefined) {
        return ""; // type cast forçado
    }
    return value;
}
console.log(getValueOrDefault()); // retorna string vazia
console.log(getValueOrDefault(42)); // retorna 42
// ===== GENERICS EM CLASSES =====
// Quando usar: Para criar classes flexíveis que funcionam com vários tipos de dados.
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const productRepo = new Repository();
productRepo.add({
    id: 1, title: "Notebook",
    name: "",
    category: "",
    price: 0
});
productRepo.add({
    id: 2, title: "Smartphone",
    name: "",
    category: "",
    price: 0
});
console.log(productRepo.getAll());
// ===== GENERICS COM KEYOF =====
// Quando usar: Para limitar os parâmetros aos nomes das propriedades de um tipo.
function getProperty(obj, key) {
    return obj[key];
}
const product = { id: 1, title: "Notebook", price: 3000 };
console.log(getProperty(product, "title")); // Notebook
console.log(getProperty(product, "price")); // 3000
// getProperty(product, "unknown"); // Erro de compilação!
// ===== GENERICS COM INFERÊNCIA COMPLEXA =====
// Quando usar: Para funções que precisam extrair tipos de outros tipos.
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const merged = mergeObjects({ name: "Augustus" }, { age: 30 });
console.log(merged); // { name: "Augustus", age: 30 }
// ===== GENERIC ARRAY UTIL =====
// Função para inverter um array de qualquer tipo
function reverseArray(array) {
    return [...array].reverse();
}
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // ['c', 'b', 'a']
// ===== GENERIC FILTER UTIL =====
// Função para filtrar itens com base em uma função de condição
function filterArray(array, predicate) {
    return array.filter(predicate);
}
const evenNumbers = filterArray([1, 2, 3, 4, 5], num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
const longWords = filterArray(["hi", "hello", "typescript"], word => word.length > 3);
console.log(longWords); // ["hello", "typescript"]
// ===== TESTES GERAIS =====
function testGenerics() {
    console.log("\n--- Testing Generic Functions ---");
    console.log(identity("Augustus"));
    console.log(pair("Developer", true));
    console.log(getLength(["TypeScript", "Generics"]));
    console.log(getValueOrDefault(100));
    const repo = new Repository();
    repo.add({ id: 1, name: "User 1" });
    console.log(repo.getAll());
    const obj1 = { x: 1 };
    const obj2 = { y: 2 };
    console.log(mergeObjects(obj1, obj2));
    console.log(reverseArray(["a", "b", "c"]));
    console.log(filterArray([10, 20, 30], x => x > 15));
}
testGenerics();
