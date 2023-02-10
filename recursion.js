// DONE /** product: calculate the product of an array of numbers. */
function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}







/** longest: return the length of the longest word in an array of words. */
function longest(words) {
}






// DONE /** everyOther: return a string with every other letter. */
function everyOther(str) {
  if (!str[0]) return '';
  return str[0] + everyOther(str.slice(2))
}





/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val) {

}

//DONE /** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if (str.length === 0) return '';
  return str[str.length -1] + revString(str.slice(0, str.length-1));
}





/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  for (let o in obj) {
    if (typeof o == "object") {
      gatherStrings(o);
      console.log('test')
    } else {
      console.log(o);
    }
  }
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  }
};

console.log(gatherStrings(nestedObj))

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val) {

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
