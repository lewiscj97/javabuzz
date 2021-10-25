describe('Javabuzz', function() {
  let javabuzz;
  
  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    });
  });
});