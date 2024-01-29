function solution(num_list) {
    var answer = [];
    let even = num_list.filter(v => v%2 === 0).length
    let odd = num_list.filter(v => v%2 !== 0 ).length
    answer.push(even,odd)
    return answer;
}