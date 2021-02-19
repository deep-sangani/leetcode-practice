let a ="101111"
let b = "10"

let i = a.length - 1
let j = b.length - 1
let sum = ""
let c =0

while (i >= 0 || j >= 0) {
        let n1 = a[i]?a[i]:'0'
        let n2 = b[j]?b[j]:'0'
        sum = String(n1 ^ n2 ^ c) + sum
        if (n1 === n2 && n1 !== String(c)) {
                c = Number(!c)
        }
        i--
        j--
}
if (c) {
        sum = String(c)+sum
}

console.log(sum);