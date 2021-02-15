let h = ""
let n = "a"
var strStr = function(h, n) {

        if (h=="" && n=="") {
               return 0
        }
        for (let i = 0; i <= h.length - n.length; i++){
                let j
                for (j = 0; j < n.length; j++){
                        if (h.charAt(i + j) != n.charAt(j)) {
                                break
                        }
                }
                if (j == n.length) {
                        return i
                }
        }
        
        return -1
        };

console.log(strStr(h,n));
