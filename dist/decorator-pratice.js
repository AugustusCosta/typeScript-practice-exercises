"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator para SPLIT
function split(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (typeof args[0] === 'string') {
            args[0] = args[0].split('');
        }
        return originalMethod.apply(this, args);
    };
}
// Decorator para REVERSE
function reverse(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (Array.isArray(args[0])) {
            args[0] = args[0].reverse();
        }
        else if (typeof args[0] === 'string') {
            args[0] = args[0].split('').reverse();
        }
        return originalMethod.apply(this, args);
    };
}
// Decorator para JOIN
function join(char) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (Array.isArray(args[0])) {
                args[0] = args[0].join(char);
            }
            return originalMethod.apply(this, args);
        };
    };
}
class StringManager {
    printReverseString(str) {
        console.log(str); // Vai receber o resultado já processado como STRING
    }
}
__decorate([
    split,
    reverse,
    join('') // AGORA o join acontece primeiro, depois reverse, depois split
], StringManager.prototype, "printReverseString", null);
const stringManager = new StringManager();
stringManager.printReverseString('Hello World');
