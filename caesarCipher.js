
function caesarCipher(string, key) { 
    
    const asCode = toCharCodes(string);
    const encrypted = [];

    for (let i = 0; i < asCode.length; i++){

        if (inRange(asCode[i], 65, 90)) {
            encrypted.push(String.fromCharCode((asCode[i] - 65 + key) %26 + 65));
        } else if (inRange(asCode[i], 97, 122)) {
            encrypted.push(String.fromCharCode((asCode[i] - 97 + key) %26 +97));
        } else {
            encrypted.push(String.fromCharCode(asCode[i]));
        }
    }

    return encrypted.join('');

}

function toCharCodes(string) {
    const codes = [];
    for (let i = 0; i < string.length; i++){
        codes.push(string.charCodeAt(i));
    }
    return codes;
}

function inRange(x, min, max) {
    return x >= min && x <= max;
}
export default caesarCipher;