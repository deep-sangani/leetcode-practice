let arr = []
let n = 4
arr[0] = 1
arr[1] = 1
arr[2] = 2

for (let i = 3; i <= n; i++){
        arr[i] = arr[i-1]+arr[i-2]
}

console.log(arr[n]);