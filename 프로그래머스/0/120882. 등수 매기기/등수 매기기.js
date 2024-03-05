function solution(score) {
    var answer = [];
    let array = score.map(v => v[0]+v[1])
    let index = array.slice().sort((a,b) => b - a)
    return array.map(v => index.indexOf(v)+1)
    ;
}