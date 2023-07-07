"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    constructor(n) {
        this.value = n;
    }
    val() {
        return this.value;
    }
    inc(v = 1) {
        if (isNaN(v)) {
            throw new Error("Value is not number!");
        }
        this.value += v;
        return this.val();
    }
    dec(v = 1) {
        if (isNaN(v)) {
            throw new Error("Value is not number!");
        }
        this.value -= v;
        return this.val();
    }
    toString() {
        return this.val().toString();
    }
}
exports.Counter = Counter;
