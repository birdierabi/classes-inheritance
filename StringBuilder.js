'use strict';

import { Builder } from './Builder.js'

function StringBuilder(data) {
  this.data = data;
}

StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.remove = function(str) {
  this.data = this.data.split('').filter(element => element !== str).join('');
  return this;
}

StringBuilder.prototype.sub = function(from, n) {
  this.data = this.data.slice(from, n + 1);
  return this;
}


console.log('ES5 class StringBuilder:');

let strBuilder = new StringBuilder('Hello'); // 'Hello';

console.log(strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';
  .remove('l')                               // 'He';
  .sub(1, 1)                                 // 'e';
  .get())                                    // -> 'e';
