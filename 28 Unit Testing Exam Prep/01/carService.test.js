const { carService } = require('./carService.js');
const { assert } = require('chai');

describe('Tests car service', () => {
  describe('isItExpensive', () => {
    it('shoult sth', () => {
      assert.equal(
        carService.isItExpensive("Engine"),
        'The issue with the car is more severe and it will cost more money'
      );
      assert.equal(
        carService.isItExpensive("Transmission"),
        'The issue with the car is more severe and it will cost more money'
      );
    });
    it('sholud be cheaper', () => {
      assert.equal(carService.isItExpensive('Test'),
        'The overall price will be a bit cheaper'
      );
    });
  });
  describe('discount', () => {
    it('should have discount', () => {
      assert.equal(carService.discount(1, 100), 'You cannot apply a discount');
      assert.equal(carService.discount(2, 100), 'You cannot apply a discount');
      assert.equal(carService.discount(3, 100), `Discount applied! You saved 15$`);
      assert.equal(carService.discount(7, 100), `Discount applied! You saved 15$`);
      assert.equal(carService.discount(8, 100), `Discount applied! You saved 30$`);
    });
    it('should trow error if params are not numbers', () => {
      assert.throw(() => carService.discount('test', 100), 'Invalid input');
      assert.throw(() => carService.discount(100, 'test'), 'Invalid input');
    });
  });

  describe('partsToBuy', () => {
    it('sould throw error if params are not aarays', () => {
      assert.throw(() => carService.partsToBuy(1, 'test'), 'Invalid input');
      assert.throw(() => carService.partsToBuy('test', 1), 'Invalid input');
      assert.throw(() => carService.partsToBuy([], 1), 'Invalid input');
      assert.throw(() => carService.partsToBuy('test', []), 'Invalid input');
    });


    it('sould calculate the price', () => {
      assert.equal(carService.partsToBuy(
        [
          { part: "blowoff valve", price: 145 },
          { part: "coil springs", price: 230 },
        ],
        ["blowoff valve", "injectors"]
      ), 145
      );
      assert.equal(carService.partsToBuy([], ["blowoff valve", "injectors"]), 0);
    });
  });
});

     // mocha 01\carService.test.js