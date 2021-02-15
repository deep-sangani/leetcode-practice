let s = "aaabbbccc"

let obj = {}

for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
                obj[s[i]] = 1
        } else {
                obj[s[i]] = obj[s[i]] + 1
        }
}
let a =[]
for (const prop in obj) {
       a.push(obj[prop]) 
}
let flag = true
console.log(a);
for (let i = 0; i < a.length-1; i++){
        if (a[i] != a[i + 1]) {
                flag = false
                break
        }
}
console.log(flag);

        



