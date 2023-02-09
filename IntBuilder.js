import { Builder } from './Builder.js'

class IntBuilder extends Builder {
  constructor(data) {
    super(data);
  }

  mod(n) {
    this.data %= n;
    return this;
  }

  static random(from, to) {
    return Math.floor(Math.random() * (to - from) + from);
  }
}


console.log('ES6 class IntBuilder:');

// EXAMPLE:
console.log(IntBuilder.random(10, 100));

let intBuilder = new IntBuilder(10); // 10;

console.log(intBuilder
  .plus(2, 3, 2)                     // 17;
  .minus(1, 2)                       // 14;
  .multiply(2)                       // 28;
  .divide(4)                         // 7;
  .mod(3)                            // 1;
  .get());                           // -> 1;
