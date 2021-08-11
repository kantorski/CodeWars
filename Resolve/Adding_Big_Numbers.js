// https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a, b){
  if (a.length > b.length){
    b = '0'.repeat(a.length - b.length) + b
  } else if(b.length > a.length){
    a = '0'.repeat(b.length - a.length) + a
  }
  let sum = ''
  let carry = 0

  for(let i = b.length-1; i >= 0; i--){
    const temp = carry
    carry = 0
    let calculate = parseInt(a[i]) + parseInt(b[i]) + temp
    if(calculate >= 10){
      carry = 1
      calculate = calculate - 10
    }
    sum = calculate.toString() + sum
  }

  if (carry == 0){
    return sum.split('').join('')
  } else if(carry == 1){
    return '1' + sum.split('').join('')
  }
}
