"use strict";
// DESAFIO: Árvore Binária de Busca (BST)
// 1. Crie uma árvore binária simples.
// 2. Implemente inserção e busca.
// DESAFIO: Árvore Binária de Busca (BST)
// 1. Crie uma árvore binária simples.
// 2. Implemente inserção e busca.
class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                // Vai para a esquerda
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
            else {
                // Vai para a direita
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
    search(value) {
        let current = this.root;
        while (current !== null) {
            if (value === current.value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return false;
    }
    // Extra: apenas para visualização: imprimir em ordem crescente
    printInOrder(node = this.root) {
        if (node !== null) {
            this.printInOrder(node.left);
            console.log(node.value);
            this.printInOrder(node.right);
        }
    }
}
// Testes rápidos:
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);
console.log(tree.search(3)); // Esperado: true
console.log(tree.search(8)); // Esperado: true
console.log(tree.search(10)); // Esperado: false
console.log("Print in order:");
tree.printInOrder();
// Esperado: 2 3 4 5 6 7 8 (cada número em uma linha)
