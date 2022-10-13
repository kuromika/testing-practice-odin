import Calculator from "./Calculator.js";

const cal = Calculator();

test('sum 2 + 2 to equal 4', () => {
    expect(cal.add(2, 2)).toBe(4);
})

test('subtract 2 - 2 to equal 0', () => {
    expect(cal.subtract(2, 2)).toBe(0);
})

test('multiply 2 times 5 to equal 10', () => {
    expect(cal.multiply(2, 5)).toBe(10);
})

test('divide 10 by 2 to equal 5', () => {
    expect(cal.divide(10, 2)).toBe(5);
})