function solution(rsp) {
    var answer = '';
    let a = Array.from(rsp)
    for(let i = 0; i < rsp.length; i++){
        if(a[i] === '2'){
            answer += 0
        } else if (a[i] === '0'){
            answer += 5
        }else if(a[i] === '5'){
            answer += 2
        }
    }
    
    return answer;
}