// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    const vowel = ['a', 'o', 'i', 'e', 'u', 'A', 'O', 'I', 'E', 'U']
    const arr = str.split('')
    const newArr = []
    const temp = []
    arr.forEach(element => {
        if(vowel.includes(element) === false){
            newArr.push(element)
        }
        else{
            temp.push(element)
        }
    });
    const newStr = newArr.join('')
    return newStr;
}

