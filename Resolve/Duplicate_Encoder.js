// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word){
  const arr = word.toLowerCase().split('')
  const obj = {}
  const newArr = []
  arr.forEach(element => {
    if(!obj[element]){
      obj[element] = 0
    }
    obj[element] += 1
  });
  for (const item of arr){
    if(obj[item] == 1){
      newArr.push(')')
    }
    else{
      newArr.push('(')
    }
  }
  return newArr.join('')
}

console.log(duplicateEncode('recede'))
