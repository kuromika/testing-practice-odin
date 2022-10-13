import analyzeArray from "./analyzeArray.js";

const object = analyzeArray([1,8,3,4,2,6]);

test('Array average is 4', () => {
    expect(object.average).toBe(4);
})

test('Array min is 1', () => {
    expect(object.min).toBe(1);
})

test('Array max is 8', () => {
    expect(object.max).toBe(8);
})

test('Array length is 6', () => {
    expect(object.length).toBe(6);
})
