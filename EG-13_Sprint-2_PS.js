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


// console.log(isPalindrome("racecar"));








/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i] + sum;
    }
    return sum;
}

// console.log(sumArray([5,5,10,30]))







/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++;
        }
    }
    return count;
}


// console.log(countVowels("javascript"))







/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {

    let array = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                array.push(i, j)
                return array
            }
        }
    }

}

// console.log(twoSum([2, 7, 11, 15], 9))







/**
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {

    const array = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            array.push(...flattenArray(arr[i]))
        } else {
            array.push(arr[i])
        }
    }

    return array

}


// console.log(flattenArray([1, [2, [3, 4], 5]]));








/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    let groups = {};

    for (let word of strs) {
        let key = word.split("").sort().join("");

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(word);
    }

    return Object.values(groups);
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))





