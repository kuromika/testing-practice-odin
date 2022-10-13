import caesarCipher from "./caesarCipher.js";

test('cipher all lowercase: from "defend" to "efgfoe" with key 1', () => {
    expect(caesarCipher('defend',1)).toMatch(/efgfoe/);
})

test('cipher all uppercase: from "CASTLE" to "DBTUMF" with key 1', () => {
    expect(caesarCipher('CASTLE', 1)).toMatch(/DBTUMF/);
})

test('cipher mixed case: from "EaSt" to "FbTu" with key 1', () => {
    expect(caesarCipher('EaSt',1)).toMatch(/FbTu/);
})       

test('cipher out of upper limit: from "xyz" to "abc" with key 3"', () => {
    expect(caesarCipher('xyz', 3)).toMatch(/abc/);
})

test('cipher ignoring punctiation: from "hello, how are you?" to "mjqqt, mtb fwj dtz?" with key 5', () => {
    expect(caesarCipher("hello, how are you?", 5)).toMatch(/mjqqt, mtb fwj dtz\?/)
})