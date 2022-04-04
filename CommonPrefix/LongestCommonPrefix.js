/*
Given an array of strings, return the longest common prefix that is shared amongst all strings.
Note: you may assume all strings only contain lowercase alphabetical characters.
Example:
["colorado", "color", "cold"], return "col"
["a", "b", "c"], return ""
["spot", "spotty", "spotted"], return "spot"
*/
var strs = ["goleador", "golosina", "golpear"];

function commonPrefix(){
    let prefix = "";
    if(strs === null || strs.length === 0) return prefix;
    //loop through the letters of the first word
    for(i=0; i<strs[0].length; i++){
        const char = strs[0][i];
        //loop through the other strings
        for(j=0; j <strs.length; j++){
            //check is this character is also present in the same position os each string
            if(strs[j][i] !== char)
                //if not, return the string up to and including the previous character
                
                return(prefix);
                
            prefix = prefix + char;
            console.log(prefix);
        }
    }
    return ( prefix);
    
}
commonPrefix(strs);
console.log(commonPrefix());