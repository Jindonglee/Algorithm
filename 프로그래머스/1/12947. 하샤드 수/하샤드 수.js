function solution(x) {
    var answer = true;
    let input = x.toString()
    if (x % input.split('').reduce((acc,cur) => acc + parseInt(cur),0) === 0){
        return true;
    }else{return false}
    return answer;
}