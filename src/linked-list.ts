// DESAFIO: Implementar uma Lista Ligada simples
// 1. Crie classes para representar nós e a lista.
// 2. Implemente métodos para adicionar e listar os elementos.

class No {
    value: number;
    next: No | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

class LinkedList {
    head: No | null = null;

    // TODO: Adicione novo nó no final da lista
    append(value: number): void {
        const newNo = new No(value);
        if (this.head === null) {
            this.head = newNo;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNo;
    }

    // TODO: Liste os valores da lista
    print(): void {
        if(this.head === null){
            console.log('');
            return;
        }
        let current: No | null = this.head;
        let values: number[] = [];
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }

        console.log(values.join(" -> "));
    }
}

// Testes rápidos:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // Esperado: 1 -> 2 -> 3
