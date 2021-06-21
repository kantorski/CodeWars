//  https://www.codewars.com/kata/564d398e2ecf66cec00000a9/train/javascript

var typeOfTriangle = function (sideA, sideB, sideC){
  arr = [sideA, sideB, sideC]
  const newArr = arr.sort((a, b) => a - b)
  console.log(newArr)

  if (!Number.isInteger(arr[0]) || !Number.isInteger(arr[1]) || !Number.isInteger(arr[2])){
    return 'Not a valid triangle'
  } 
  else if (sideA == 0 || sideB == 0 || sideC == 0){
    return 'Not a valid triangle'
  }
  else if (sideA == sideB && sideB == sideC && sideA == sideC){
    return 'Equilateral'
  }
  else if(newArr[0] + newArr[1] <= newArr[2]){
    return 'Not a valid triangle'
  }
  else if (sideA == sideB || sideA == sideC || sideB == sideC){
    return 'Isosceles'
  }
  else{
    return 'Scalene'
  }
}

