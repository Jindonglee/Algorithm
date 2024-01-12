function solution(n) {
    var answer = 0;
    let arr = []
    for (i = 1; i <= n; i++){
        arr.push(i) 
    }
    let a = []
    for (i = 0; i < arr.length; i++){
        if (n%arr[i] === 0){
            a.push(arr[i])
        }
    }
    answer = a.reduce((acc,cur) => acc+cur,0)
    return answer;
}