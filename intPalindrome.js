var no = 121

if((no>=Math.pow(-2,31)) && (no<=Math.pow(2,31)-1)){
    var reno = no.toString().split("").reverse().join("")
 reno = parseInt(reno)

if(no==reno){
  
    console.log("palindrome");
}
else{
    console.log(" not palindrome");
}
}else{
    return 0
}