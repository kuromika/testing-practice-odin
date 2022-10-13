import capitalize from "./capitalize.js";

test('Capitalizes string "hello"', () => {
    expect(capitalize('hello')).toBe('Hello');
});