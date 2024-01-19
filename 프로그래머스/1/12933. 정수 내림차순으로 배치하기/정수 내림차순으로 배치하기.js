function solution(n) {
    var answer = 0;
    let int = n.toString()
    let result = int.split('').sort((a,b) => b-a).join('');
    answer = Number(result)
    return answer;
}