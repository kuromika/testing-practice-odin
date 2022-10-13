import reverseString from "./reverseString.js";

test('Reverse string "hello" to "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
});