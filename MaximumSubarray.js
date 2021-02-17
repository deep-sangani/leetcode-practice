let arr = [0]

let max = null
for (let i = 0; i < arr.length; i++){
        let arr1 = []
        let sum = 0
        let j = 0
        for (j = i; j < arr.length; j++){
                sum = sum + arr[j]
                arr1.push(sum)
        }
     
        j = 0
        while (j < arr1.length - 1) {
                if (arr1[j] > arr1[j+1]) {
                        let t = arr1[j]
                        arr1[j] = arr1[j + 1]
                        arr1[j+1] = t
                }
                j++
        }
     
        sum = arr1[arr1.length - 1]
        if (max == null) {
                max = sum
        }
       
        if (sum > max) {
                max = sum
        }

}``

console.log(max);