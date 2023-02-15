class Builder {
  constructor(data) {
    this.data = data;
  }

  isNumber() {
    return typeof(this.data) === 'number';
  }

  plus(...n) {
    n.forEach(element => this.data += element);
    return this;
  }

  minus(...n) {
    this.isNumber() ? n.forEach(element => this.data -= element) : this.data.slice(0, -n);
    return this;
  }

  multiply(n) {
    this.isNumber() ? this.data *= n : this.data.repeat(n);
    return this;
  }

  divide(n) {
    this.isNumber() ? this.data /= n : this.data.slice(0, Math.floor(this.data.length / n));
    return this;
  }

  get() {
    return console.log(this.data);
  }
}

export { Builder }