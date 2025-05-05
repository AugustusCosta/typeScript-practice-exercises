// Decorator para SPLIT
function split(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (typeof args[0] === 'string') {
            args[0] = args[0].split('');
        }
        return originalMethod.apply(this, args);
    }
}

// Decorator para REVERSE
function reverse(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (Array.isArray(args[0])) {
            args[0] = args[0].reverse();
        } else if (typeof args[0] === 'string') {
            args[0] = args[0].split('').reverse();
        }
        return originalMethod.apply(this, args);
    }
}

// Decorator para JOIN
function join(char: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            if (Array.isArray(args[0])) {
                args[0] = args[0].join(char);
            }
            return originalMethod.apply(this, args);
        }
    }
}

class StringManager {
    @split
    @reverse
    @join('') // AGORA o join acontece primeiro, depois reverse, depois split
    printReverseString(str: string): void {
        console.log(str); // Vai receber o resultado já processado como STRING
    }
}

const stringManager = new StringManager();
stringManager.printReverseString('Hello World');
