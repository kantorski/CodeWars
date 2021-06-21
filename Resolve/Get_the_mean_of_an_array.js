// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
  const average = marks.reduce((acu, ele) => acu + ele) / marks.length
  return Math.floor(average)
}
