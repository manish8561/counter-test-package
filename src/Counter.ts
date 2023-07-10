export class Counter {
  value: number;

  constructor(n: number) {
    this.value = n;
  }

  val(): number {
    return this.value;
  }

  inc(v: number = 1): number {
    if (isNaN(v)) {
      throw new Error("Value is not number!");
    }
    this.value += v;
    return this.val();
  }

  dec(v: number = 1): number {
    if (isNaN(v)) {
      throw new Error("Value is not number!");
    }
    this.value -= v;
    return this.val();
  }

  toString(): string {
    return this.val().toString();
  }
}
