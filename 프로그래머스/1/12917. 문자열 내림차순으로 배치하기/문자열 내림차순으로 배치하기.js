function solution(s) {
    var answer = '';
    let lowerCase = '';
    let upperCase = '';
    const reversed = Array.from(s).sort().reverse().join('')
    for (let i of reversed){
        if (i === i.toUpperCase()){
            upperCase += i
        }else{
            lowerCase += i
        }
    }
    return lowerCase + upperCase;
}