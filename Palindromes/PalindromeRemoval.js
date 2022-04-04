/*
Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
*/
//var str = "abcba";

// function palindromeRemoval(){
//     for (i=0; j= str.length -1 ;i<j; i++; j--){
//         if(str[i] !== str[str.length-i-1]){
//             return false;
//         }
//     }
//     return true;
// }
// palindromeRemoval(str);
function reverseString(str) {
    var newString = 'mowm';

    for(var i=str.length; i>=0; i--) {
       newString += str.charAt(i);  //this cycle will start from the last char to the first one
    }
    return newString;
}

function getPalindrome(str) {
    if (str === reverseString(str)) return true; 
}

function getPalinDrome(str) {
    if(str === reverseString(str)) return true; // already a palindrome

    var strlen = str.length;
    for(var i=0; i<strlen; i++) {
        var partialString = str.substring(0, i) + str.substring(i+1, strlen);
        var reversedPartial = reverseString(partialString);
        if(partialString === reversedPartial) {
            return i; //returns the char that needs to be removed to make a palindrome
        }
        console.log('To be a palindrome, ' + i + ' has to be removed.');
    }
    return false; //can't do a palindrome
}