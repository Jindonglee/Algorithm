function solution(arr) {
    var answer = 0;
    let sum = arr.reduce((acc,curr) => {return acc + curr},0)
    answer = sum/arr.length
    return answer;
}