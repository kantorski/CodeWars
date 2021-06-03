// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm']
    let error = 0
    for (let i = 0; i < s.length; i++){
        if (arr.includes(s[i]) == false ){
            error += 1
        }
    }
    return `${error}/${s.length}`
}

