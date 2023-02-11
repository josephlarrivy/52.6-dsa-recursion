// DONE /** product: calculate the product of an array of numbers. */
function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

// DONE /** longest: return the length of the longest word in an array of words. */
function longest(words, length=0) {
  if (words.length === 0) return length;
  length = Math.max(words[0].length, length)
  return longest(words.slice(1), length)
}

// DONE /** everyOther: return a string with every other letter. */
function everyOther(str) {
  if (!str[0]) return '';
  return str[0] + everyOther(str.slice(2))
}

// DONE /** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str, idx=0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

// DONE /** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, count=0) {
  if (count == arr.length) return -1;
  if (arr[count] == val) return count;
  return findIndex(arr, val, count+1)
}

//DONE /** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if (str.length === 0) return '';
  return str[str.length -1] + revString(str.slice(0, str.length-1));
}

/** gatherStrings: given an object, return an array of all of the string values. */
// function gatherStrings(obj, arr=[]) {
//   for (let o in obj) {
//     if (typeof obj[o] == "string") arr.push(obj[o]);
//     if (typeof obj[o] == "object") arr.push(...gatherStrings(obj[o], arr));
//   }
//   return arr;
// }

// couldn't figure this one out
function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
// function binarySearch(arr, val, count=0) {
//   if (arr[0] == val) return count;
//   if (arr.length == 0) return -1;
//   return binarySearch(arr.slice(1), val, count+1)
// }

// gave this one a shot. couldn't quite get it the most efficient way

function binarySearch(arr, val, leftIdx=0, rightIdx=arr.length) {
  if (leftIdx>rightIdx) return -1;

  let middleIdx = Math.floor((rightIdx + leftIdx) / 2);

  if (arr[middleIdx] === val) return middleIdx;
  if (arr[middleIdx] > val) return binarySearch(arr, val, leftIdx, middleIdx - 1);

  return binarySearch(arr, val, middleIdx + 1, rightIdx);
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
