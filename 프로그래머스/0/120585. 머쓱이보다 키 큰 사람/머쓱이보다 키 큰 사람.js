function solution(array, height) {
    var answer = 0;
    let arr = array.sort((a,b) => a-b)
    for(let i = 0; i < arr.length; i++){
        if (height < arr[i]){
            return arr.length - i
        }
    }
    return answer;
}