// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
    let answer = ''
    if(names.length == 0){
        answer = 'no one likes this'
    }
    else if(names.length == 1){
        answer = `${names} likes this`
    }
    else if(names.length == 2){
        answer = `${names[0]} and ${names[1]} like this`
    }
    else if(names.length == 3){
        answer = `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else{
        answer = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
    return answer
}

