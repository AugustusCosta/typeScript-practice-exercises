# TypeScript Practice Exercises

This repository contains a collection of small exercises in TypeScript to practice fundamental programming concepts and TypeScript features.

## Exercises

Here's a brief description of each exercise included:

### 1. Array and Object Manipulation (`src/arrays-objects.ts`)

This exercise focuses on manipulating arrays and objects using TypeScript.
- Implement a function to filter even numbers from a list of numbers.
- Implement a function to transform an array of person objects (with `nome` and `idade`) into a list of names for individuals older than 18.

### 2. Binary Search Tree (BST) (`src/trees.ts`)

This exercise involves implementing a simple Binary Search Tree.
- Create classes for `TreeNode` and `BinaryTree`.
- Implement methods for inserting values into the tree.
- Implement a method for searching for a value in the tree.
- (Optional) Implement an in-order traversal method to print the tree elements.

### 3. Simple Linked List (`src/linked-list.ts`)

This exercise guides you through implementing a basic Linked List data structure.
- Create classes for `Node` and `LinkedList`.
- Implement a method to add new nodes to the end of the list (`append`).
- Implement a method to print the values of the list (`print`).

### 4. Strong Typing Practice (`src/typing-practice.ts`)

This exercise demonstrates the use of strong typing with interfaces in TypeScript.
- Define an interface for `Product` with properties like `id`, `name`, `category`, and `price`.
- Create a function that filters a list of products based on a given category, leveraging the defined interface for type safety.

## How to Run the Exercises

To run any of these exercises, you need to compile the TypeScript file into JavaScript and then execute the resulting JavaScript file using Node.js.

1.  **Compile the TypeScript file:**
    ```bash
    npx tsc
    ```
    This command compiles all `.ts` files in your `src` directory into `.js` files in the `dist` directory.

2.  **Execute the compiled JavaScript file:**
    ```bash
    node dist/nome-do-arquivo.js
    ```
    Replace `nome-do-arquivo.js` with the actual name of the compiled JavaScript file you want to run (e.g., `dist/arrays-objects.js`, `dist/trees.js`, etc.).

Feel free to explore the code, modify it, and add more exercises!
