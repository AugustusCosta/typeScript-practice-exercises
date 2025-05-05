"use strict";
// patterns.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Dog {
    speak() { console.log('Woof!'); }
}
class AnimalFactory {
    static createAnimal(type) {
        if (type === 'dog')
            return new Dog();
        throw new Error('Animal não suportado');
    }
}
class WindowsButton {
    render() { console.log('Render Windows Button'); }
}
class MacButton {
    render() { console.log('Render Mac Button'); }
}
class WindowsFactory {
    createButton() { return new WindowsButton(); }
}
class MacFactory {
    createButton() { return new MacButton(); }
}
// Builder
// Quando usar: Quando você precisa construir objetos complexos passo a passo.
class UserBuilder {
    constructor() {
        this.name = '';
        this.age = 0;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setAge(age) {
        this.age = age;
        return this;
    }
    build() {
        return { name: this.name, age: this.age };
    }
}
// Singleton
// Quando usar: Quando você quer garantir que só exista uma instância de uma classe em todo o sistema.
class Database {
    constructor() { }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
// ======= ESTRUTURAIS =======
// Adapter
// Quando usar: Quando você quer adaptar uma interface existente para outra que é esperada.
class OldAPI {
    oldRequest() { return 'old data'; }
}
class NewAPIAdapter {
    constructor(oldApi) {
        this.oldApi = oldApi;
    }
    newRequest() {
        return this.oldApi.oldRequest();
    }
}
// Decorator
// Quando usar: Quando você quer adicionar funcionalidade a objetos dinamicamente sem alterar seu código original.
function Logger(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with`, args);
        return original.apply(this, args);
    };
}
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    Logger
], Calculator.prototype, "add", null);
class RealService {
    request() { return 'Data from real service'; }
}
class ProxyService {
    constructor(realService) {
        this.realService = realService;
    }
    request() {
        console.log('Logging request...');
        return this.realService.request();
    }
}
class PaypalPayment {
    pay(amount) { console.log(`Paid ${amount} via Paypal`); }
}
class CreditCardPayment {
    pay(amount) { console.log(`Paid ${amount} via Credit Card`); }
}
class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    executePayment(amount) {
        this.strategy.pay(amount);
    }
}
class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}
class PrintCommand {
    constructor(message) {
        this.message = message;
    }
    execute() {
        console.log(this.message);
    }
}
class Invoker {
    constructor() {
        this.commands = [];
    }
    addCommand(command) {
        this.commands.push(command);
    }
    run() {
        this.commands.forEach(cmd => cmd.execute());
    }
}
// ======= TESTES RÁPIDOS =======
function testPatterns() {
    console.log("\n--- Factory ---");
    const dog = AnimalFactory.createAnimal('dog');
    dog.speak();
    console.log("\n--- Abstract Factory ---");
    const guiFactory = new WindowsFactory();
    guiFactory.createButton().render();
    console.log("\n--- Builder ---");
    const user = new UserBuilder().setName("Augustus").setAge(30).build();
    console.log(user);
    console.log("\n--- Singleton ---");
    const db1 = Database.getInstance();
    const db2 = Database.getInstance();
    console.log(db1 === db2); // true
    console.log("\n--- Adapter ---");
    const adapter = new NewAPIAdapter(new OldAPI());
    console.log(adapter.newRequest());
    console.log("\n--- Decorator ---");
    const calculator = new Calculator();
    calculator.add(2, 3);
    console.log("\n--- Proxy ---");
    const proxy = new ProxyService(new RealService());
    console.log(proxy.request());
    console.log("\n--- Strategy ---");
    const payment = new PaymentContext(new PaypalPayment());
    payment.executePayment(100);
    console.log("\n--- Observer ---");
    const subject = new Subject();
    subject.subscribe(data => console.log('Observer 1 received:', data));
    subject.subscribe(data => console.log('Observer 2 received:', data));
    subject.notify('Update event');
    console.log("\n--- Command ---");
    const invoker = new Invoker();
    invoker.addCommand(new PrintCommand("Hello"));
    invoker.addCommand(new PrintCommand("World"));
    invoker.run();
}
// Rodar todos os testes
testPatterns();
