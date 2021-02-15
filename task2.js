let s = "{()[]{}}"
let post = s.length - 1
let fl 
for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i)
        if (ch == "{") {
                if (s.charAt(post - i) == "}") {
                        fl = true
                        
                } else {
                        fl=false
                }
        }else if (ch == "(") {
                if (s.charAt(post - i) == ")") {
                        fl = true
                        
                }else {
                        fl=false
                }
        }else if (ch == "[") {
                if (s.charAt(post - i) == "]") {
                        fl = true
                        
                }else {
                        fl=false
                }
        }
}
console.log(fl);