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
    if (this.isNumber()) {
      n.forEach(element => this.data -= element);
    } else {
      this.data = this.data.slice(0, -n);
    }
    return this;
  }

  multiply(n) {
    if (this.isNumber()) {
      this.data *= n;
    } else {
      this.data = this.data.repeat(n);
    }
    return this;
  }

  divide(n) {
    if (this.isNumber()) {
      this.data /= n;
    } else {
      this.data = this.data.slice(0, Math.floor(this.data.length / n));
    }
    return this;
  }

  get() {
    return console.log(this.data);
  }
}

export { Builder }