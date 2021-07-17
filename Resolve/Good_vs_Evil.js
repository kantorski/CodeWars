function goodVsEvil(good, evil){
  const arrWorthGood = [{unit: 'Hobbit', value: 1},
                        {unit: 'Men', value: 2},
                        {unit: 'Elves', value: 3},
                        {unit: 'Dwarves', value: 3},
                        {unit: 'Eagles', value: 4},
                        {unit: 'Wizards', value: 10}]
  const arrWorthEvil = [{unit: 'Orcs', value: 1},
                        {unit: 'Men', value: 2},
                        {unit: 'Wargs', value: 2},
                        {unit: 'Goblins', value: 2},
                        {unit: 'Uruk Hai', value: 3},
                        {unit: 'Trolls', value: 5},
                        {unit: 'Wizards', value: 10}]
  const arrGood = good.split(' ')
  const arrEvil = evil.split(' ')
  
  for (let i = 0; i < arrGood.length; i++){
    arrGood[i] = arrGood[i] * arrWorthGood[i].value
  }
  for (let i = 0; i < arrEvil.length; i++){
    arrEvil[i] = arrEvil[i] * arrWorthEvil[i].value
  }
  const reducer = (acc, cVal) => parseInt(acc) + parseInt(cVal)
  const valueGood = arrGood.reduce(reducer)
  const valueEvil = arrEvil.reduce(reducer)

  if (valueGood == valueEvil){
    return "Battle Result: No victor on this battle field"
  }
  else if(valueGood < valueEvil){
    return "Battle Result: Evil eradicates all trace of Good"
  }
  else if (valueGood > valueEvil){
    return "Battle Result: Good triumphs over Evil"
  }
}