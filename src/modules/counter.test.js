import { counter } from "./counter.js";

describe("Testing the total number of items", () => {
    const count1 = counter([1, 2, 4, 5, 6, 7]);
    const count2 = counter([2,4,5,7])
  test(`Total number of items supposed to be: ${count1}`, () => {
      expect(count1).toBe(6);
  });
   test(`Total number of items supposed to be: ${count2}`, () => {
     expect(count2).toBe(4);
   });
});
