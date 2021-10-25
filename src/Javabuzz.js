class Javabuzz {
  isDivisibleByThree(number) {
    return (number % 3 === 0);
  }

  isDivisibleByFive(number) {
    return (number % 5 === 0);
  }

  isDivisibleByThreeAndFive(number) {
    return (this.isDivisibleByThree(number) && this.isDivisibleByFive(number));
  }
}
