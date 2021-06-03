// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature,n){
    const arr = signature
    const newArr = []
    if(n < 3){
        for(let i = 0; newArr.length < n; i++){
            newArr.push(arr[i])
        }
        return newArr
    }
    else{
        for(let i = arr.length-1; arr.length < n; i++){
            console.log(arr)
            arr.push(arr[i] + arr[i-1] + arr[i-2])
        }
        return arr
    }
}


