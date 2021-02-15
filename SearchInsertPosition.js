let arr = [1, 2, 3, 4, 5]
let target = 7
let j= null
for (let i = 0; i < arr.length; i++){
        if (arr[i] == target) {
                j=i
                break
        }
}

if (j == null) {
        let l = 0
        let h = arr.length
        while (l < h) {
                let mid = parseInt((l + h) / 2)
                if (arr[mid] < target) {
                        l = mid + 1
                } else {
                        h = mid
                }
        }
        j=l
}

console.log(j);