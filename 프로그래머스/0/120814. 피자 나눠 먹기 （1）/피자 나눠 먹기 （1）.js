function solution(n) {
    var answer = 0;
    if(7%n > 0){
        return Math.ceil(n/7)
    }else{
        return 1
    }
    return answer;
}