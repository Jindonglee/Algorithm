function solution(phone_number) {
    var answer = [];
    let arr = Array.from(phone_number)
    for(let i = 0; i < arr.length; i++){
        if (i < arr.length -4){
            answer.push('*')
        }else {
            answer.push(arr[i])
        }
    }
    answer = answer.reduce((a,c) => a+c)
    
    return answer;
}