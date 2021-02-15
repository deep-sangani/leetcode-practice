let arr = [1, 1, 2, 2, 3]

function removeDuplicate (a) {
        let t=a[0]
        let pos = 1
        for (let i = pos; i < a.length; i++){
                if (t < a[i]) {
                        a[pos] = a[i]
                        pos++
                        t=a[i]
                }
        }
        console.log(pos);
}

removeDuplicate(arr)
console.log(arr);