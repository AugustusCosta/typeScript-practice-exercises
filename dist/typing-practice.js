"use strict";
// DESAFIO: Uso de Tipagem forte
// 1. Defina interfaces para produtos.
// 2. Crie uma função que filtre produtos por categoria.
// TODO: Filtrar produtos pela categoria informada
function filterProductsByCategory(products, category) {
    return products.filter((product) => product.category === category);
}
// Testes rápidos:
const products = [
    {
        id: 1, name: "Camisa", category: "Roupas", price: 50,
        title: ""
    },
    {
        id: 2, name: "Celular", category: "Eletrônicos", price: 1200,
        title: ""
    },
    {
        id: 3, name: "Calça", category: "Roupas", price: 80,
        title: ""
    },
];
console.log(filterProductsByCategory(products, "Roupas"));
// Esperado: [{ id: 1, name: "Camisa", ...}, { id: 3, name: "Calça", ...}]
