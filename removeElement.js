let arr =[3,2,2,3]
let ele = 2

function removeElement (a, e) {
        let j=0
        for (let i = 0; i < a.length; i++){
                if (a[i] != e) {
                        a[j] = a[i]
                        j++
                }
        }
        return j
}


removeElement(arr, ele)
console.log(arr);
