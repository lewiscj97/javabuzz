class Javabuzz {
  play(range) {
    let arr = [];
    for (let i = 1; i <= range; i++) {
      arr.push(this.says(i));
    }
    return arr.join(', ');
  }

  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return 'JavaBuzz';
    } else if (this.isDivisibleByThree(number)) {
      return 'Java';
    } else if(this.isDivisibleByFive(number)) {
      return 'Buzz';
    } else {
      return number.toString();
    }
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }
}
