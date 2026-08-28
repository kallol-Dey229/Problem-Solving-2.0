/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {

    const reversed = [];

    for (let i = 1; i <= str.length; i++) {
        reversed.push(str[str.length - i])
    }
    return reversed.join("")

}

console.log(reverseString("hello"))