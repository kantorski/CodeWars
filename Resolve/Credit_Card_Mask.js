// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
    let mask = ''
    if(cc.length > 4){
        mask = '#'.repeat(cc.length - 4) + cc.slice(-4)
    }
    else{
        mask = cc
    }
    return mask
}



