function solution(n) {
    var answer = [];
    let str = n.toString();
    answer = Array.from(str).reverse().map(data => Number(data))
    return answer;
}