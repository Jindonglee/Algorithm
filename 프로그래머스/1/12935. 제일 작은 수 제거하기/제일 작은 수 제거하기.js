function solution(arr) {
    var answer = [];
    
    if (arr.length > 1) {
        const min = Math.min(...arr);
        answer.push(...arr.filter(num => num !== min));
    } else {
        answer = [-1];
    }

    return answer;
}