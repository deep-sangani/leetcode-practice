let digits = 
[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

let carry = 0;
for (let i = digits.length - 1 ; i >= 0; i--){
    carry = (digits[i] + 1 == 10)? 1 : 0;
    if (carry == 0){
        digits[i] = digits[i] + 1;
        break;
    }else{
        digits[i] = 0 ; 
    }
}
if (carry == 1){
    digits.unshift(1);
}



console.log(digits);