// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

function solution(roman){
  romanNumbers = [
    {
      roman: 'I',
      arab: 1
    },
    {
      roman: 'V',
      arab: 5
    },
    {
      roman: 'X',
      arab: 10
    },
    {
      roman: 'L',
      arab: 50
    },
    {
      roman: 'C',
      arab: 100
    },
    {
      roman: 'D',
      arab: 500
    },
    {
      roman: 'M',
      arab: 1000
    }
  ]
  const arr = roman.split('')
  let sum = 0
  for (let i = 0; i < arr.length; i++){
    if (i == arr.length - 2 && arr[i] == 'I' && arr[i+1] == 'V'){
      sum += 4
      break
    }
    let num = romanNumbers.find(({roman}) => roman === arr[i])
    sum += num.arab
  }
  return sum
}