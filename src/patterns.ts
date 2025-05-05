// patterns.ts

// ======= CRIACIONAIS =======

// Factory Method
// Quando usar: Quando você quer delegar a criação de objetos para subclasses ou métodos específicos.

interface Animal {
    speak(): void;
}

class Dog implements Animal {
    speak() { console.log('Woof!'); }
}

class AnimalFactory {
    static createAnimal(type: string): Animal {
        if (type === 'dog') return new Dog();
        throw new Error('Animal não suportado');
    }
}

// Abstract Factory
// Quando usar: Quando você precisa criar famílias de objetos relacionados, sem especificar suas classes concretas.

interface Button { render(): void; }
class WindowsButton implements Button {
    render() { console.log('Render Windows Button'); }
}
class MacButton implements Button {
    render() { console.log('Render Mac Button'); }
}

interface GUIFactory {
    createButton(): Button;
}

class WindowsFactory implements GUIFactory {
    createButton() { return new WindowsButton(); }
}
class MacFactory implements GUIFactory {
    createButton() { return new MacButton(); }
}

// Builder
// Quando usar: Quando você precisa construir objetos complexos passo a passo.

class UserBuilder {
    private name: string = '';
    private age: number = 0;

    setName(name: string): this {
        this.name = name;
        return this;
    }

    setAge(age: number): this {
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
    private static instance: Database;

    private constructor() {}

    static getInstance(): Database {
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
    constructor(private oldApi: OldAPI) {}

    newRequest() {
        return this.oldApi.oldRequest();
    }
}

// Decorator
// Quando usar: Quando você quer adicionar funcionalidade a objetos dinamicamente sem alterar seu código original.

function Logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with`, args);
        return original.apply(this, args);
    };
}

class Calculator {
    //@Logger
    add(a: number, b: number) {
        return a + b;
    }
}

// Proxy
// Quando usar: Quando você quer controlar o acesso a outro objeto, adicionando funcionalidades como cache, validação ou logging.

interface Service {
    request(): string;
}

class RealService implements Service {
    request() { return 'Data from real service'; }
}

class ProxyService implements Service {
    constructor(private realService: RealService) {}

    request() {
        console.log('Logging request...');
        return this.realService.request();
    }
}

// ======= COMPORTAMENTAIS =======

// Strategy
// Quando usar: Quando você quer alterar algoritmos ou comportamentos de forma intercambiável em tempo de execução.

interface PaymentStrategy {
    pay(amount: number): void;
}

class PaypalPayment implements PaymentStrategy {
    pay(amount: number) { console.log(`Paid ${amount} via Paypal`); }
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number) { console.log(`Paid ${amount} via Credit Card`); }
}

class PaymentContext {
    constructor(private strategy: PaymentStrategy) {}

    executePayment(amount: number) {
        this.strategy.pay(amount);
    }
}

// Observer
// Quando usar: Quando múltiplos objetos precisam ser notificados sobre mudanças em outro objeto.

type Observer = (data: any) => void;

class Subject {
    private observers: Observer[] = [];

    subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    notify(data: any) {
        this.observers.forEach(observer => observer(data));
    }
}

// Command
// Quando usar: Quando você quer encapsular uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações.

interface Command {
    execute(): void;
}

class PrintCommand implements Command {
    constructor(private message: string) {}

    execute() {
        console.log(this.message);
    }
}

class Invoker {
    private commands: Command[] = [];

    addCommand(command: Command) {
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
