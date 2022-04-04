//Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters
const string = prompt('Enter a string: ');

var low = string.replace(/[,.:0-9*+/]/g, "").split(" ").join("");
var reverse = low.toLowerCase().split("").reverse().join("");
var str = string.replace(/[,.:0-9*+/]/g, "").toLowerCase().split(" ").join("")
console.log(str);
console.log(reverse);

//condition
if(reverse === str){
    console.log("It's a palindrome");
}else{
    console.log("It's not a palindrome");
}