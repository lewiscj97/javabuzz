describe('Javabuzz', function() {
  let javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();
  })
  
  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    })
  });

  describe('knows when a number is not', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(2)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(2)).toBe(false);
    });

    it('divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByFifteen(7)).toBe(false);
    })
  });

  describe('when playing, says', function() {
    it('"Java" when number is divisible by 3', function() {
      expect(javabuzz.says(3)).toBe('Java');
    });

    it('"Buzz" when number is divisible by 5', function() {
      expect(javabuzz.says(5)).toBe('Buzz');
    });

    it('"JavaBuzz" when number is divisible by 15', function() {
      expect(javabuzz.says(15)).toBe('JavaBuzz');
    });

    it('the number when number is not divisible by 3, 5 or 15', function() {
      expect(javabuzz.says(14)).toBe('14');
    });
  });
});
