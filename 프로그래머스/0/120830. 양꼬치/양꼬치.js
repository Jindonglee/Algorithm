function solution(n, k) {
    var answer = 0;
    answer = (n*12000) + (k*2000)
    if (n >= 10){
        return answer - Math.floor(n/10)*2000
    }
    return answer;
}