let s = " "
let l =0
for (let i = 0; i < s.length; i++){
        if (s[i]!= " ") {
                l++
        } else {
        
                
                if (s[i + 1] != " " && s[i+1]!=undefined) {
                       
                        l=0
                } 
                
        }
}
console.log(l);