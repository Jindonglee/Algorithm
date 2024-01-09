function solution(numbers) {
    var answer = 0;
    a = numbers.reduce((acc,curr) => {return acc+curr},0)
    answer = a / numbers.length
    return answer;
}