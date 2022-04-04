//Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

var str = prompt ('Prompt a word');

//first letter
if(str.charAt(0) == str.charAt(0).toUpperCase()){
    console.log(true);
}else{
    console.log(false);
}

//for al capital letters
for (i=0; i<str.length; i++){
    var char = str.charAt(i);
    if( str == str.toUpperCase()){
        console.log(true);
    }else{
        console.log(false);
        break;
    }
}

//for all not capital
for (i=0; i<str.length; i++){
    if( str == str.toLowerCase()){
        console.log(true);
    }else{
        console.log(false);
        break;
    }
}

//Capital letter in a wrong position
for (i=1; i<str.length; i++){
    if( str == str.toLowerCase()){
        console.log(true);
    }else{
        console.log(false);
        break;
    }
}
