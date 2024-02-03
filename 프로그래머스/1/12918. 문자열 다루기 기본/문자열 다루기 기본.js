function solution(s) {
    var answer = true;
    if (s.length === 4 || s.length === 6){
        if(s.replace(/[0-9]/gi,'').length > 0){
            answer = false
        }else{
            answer = true
        }
    }else{
        answer = false
    }
    return answer;
}