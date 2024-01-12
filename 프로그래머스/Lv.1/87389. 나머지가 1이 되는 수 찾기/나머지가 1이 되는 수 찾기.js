function solution(n) {
    var answer = 0;
    let arr = []
    for (i=2; i <= n; i++){
        arr.push(i)
    }
    let a = []
    for (i = 0; i < arr.length; i++){
        if(n%arr[i] === 1){
            a.push(arr[i])
        }
    }
    answer = Math.min(...a)
    return answer;
}