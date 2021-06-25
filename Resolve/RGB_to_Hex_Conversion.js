// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g ,b){
  const arrHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
  const decimal = [r, g ,b]
  const hex = []
  if(isNaN(r) == true || isNaN(g) == true || isNaN(b) == true){
    return undefined
  }
  for (color of decimal){
    if (color <= 0){
      hex.push('00')
      // hex.push(0)
    }
    else if (color > 255){
      hex.push('FF')
    }
    else{
      const integ = Math.floor(color / 16)
      const rest = color % 16
      hex.push(arrHex[integ])
      hex.push(arrHex[rest])
    }
  }
  return hex.join('')
}
