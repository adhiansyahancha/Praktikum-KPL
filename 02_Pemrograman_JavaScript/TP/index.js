const arr1 = [2, 26, 28, -2];

function sumOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i = i + 1) {
       if (arr[i] >= 0) {
           result = result * arr[i]
       }
    }
    
    return result;
}

console.log(sumOfArray(arr1));