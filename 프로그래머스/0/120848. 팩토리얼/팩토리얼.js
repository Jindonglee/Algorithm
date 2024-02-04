function solution(n) {
    var answer = 0;
    for(let a = 1; a <= 11; a++){
        if (Array(a).fill().map((v,i) => i+1).reduce((a,c) => a*c) > n){
            return a - 1
            break;
        }
    }
}