/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {

    const reversed = [];

    for (let i = 1; i <= str.length; i++) {
        reversed.push(str[str.length - i])
    }
    return reversed.join("");

}

// console.log(reverseString("hello"))




/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {

    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] > max) {
            max = nums[i]
        }
    }

    return max;
}

// console.log(findMax([3, 7, 2, 9, 5]))





/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false
        }
    }

    return true;
}


console.log(isPalindrome("adkmkdm"));