//  https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  let newNumer = num
  let count = 0
  if (num < 10){
    return count = 0
  }
  else{
    while(true){
      let arr = newNumer.toString().split('')
      newNumer = arr.reduce((acc, currentValue) => acc * currentValue)
      count++
      if(newNumer > 9){
        continue
      }
      else{
        break
      }
    }
    return count
  }
}

const number = 999
const newNumber = number.toString().split('')
console.log(newNumber)
const count = 0


const map = newNumber.reduce((acc, currentValue) => acc * currentValue)
console.log(map)




console.log(persistence(25))