function solution(s) {
    var answer = '';
    const i = ~~(s.length/2)
    answer = s[i]
    if(s.length%2 === 0){
        answer = s[i-1]+s[i]
    }
    return answer;
}