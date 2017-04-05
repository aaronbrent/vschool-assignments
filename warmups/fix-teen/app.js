//function fixTeen(a, b, c){
//    if(a === 13 || a === 14 || a === 17 || a === 18 || a === 19){
//        a = 0;
//    } if(b === 13 || b === 14 || b === 17 || b === 18 || b === 19){
//        b = 0;
//    }if(c === 13 || c === 14 || c === 17 || c === 18 || c === 19){
//        c = 0;
//    }
//    return (a + b + c)
//}

function fixTeen(n){
    if(n === 13 || n === 14 || n === 17 || n === 18 || n === 19){
      return  n = 0;
    } else {
      return n;
    }
}
    
function noTeenSum(a, b, c){
    
    return (fixTeen(a) + fixTeen(b) + fixTeen(c));
}

noTeenSum(1, 2, 3);  
noTeenSum(2, 13, 1); 
noTeenSum(2, 1, 14) ; 
noTeenSum(2, 15, 14);