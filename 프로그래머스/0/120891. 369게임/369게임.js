function solution(order) {
    var answer = 0;
    answer = order.toString().split('').filter(v => v.includes(3)||v.includes(9)||v.includes(6)).length
    return answer;
}