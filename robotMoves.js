
let moves = prompt('Wride down the robot moves (R, L, U, D)');

var UD = 0;
var LR = 0;

var move = moves.length;
console.log(move);

for(i=0; i < moves.length;i++){
    var currentMove = moves.charAt(i);
}if(currentMove == 'U'){
    UD++;
}else if(currentMove == 'D'){
    UD--;
}else if(currentMove == 'R'){
    LR++;
}else if(currentMove == 'L'){
    LR--;
}
console.log(UD,LR);
if(UD == 0 && LR == 0){
    console.log('True');
}else{
    console.log('False');
}





