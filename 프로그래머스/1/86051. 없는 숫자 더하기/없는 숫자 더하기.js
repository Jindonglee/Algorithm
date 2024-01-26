function solution(numbers) {
    var answer = -1;
    let arr = Array(10).fill().map((_,i) => i).filter(a => !numbers.includes(a)).reduce((a,c) => a+c)
    return arr;
}