import { counter } from "./items.js";

describe("Testing the total number of items", () => {
    const count1 = counter([1,2,4,5,6,7])
    test("Total number of items is 0", () => { 
        expect(count1).toBe(6)
    })
})