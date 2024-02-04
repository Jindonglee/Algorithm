function solution(age) {
    var answer = '';
    let chr = 'abcdefghij'
    answer = age.toString().split('').map(v => chr[v]).join('')
    return answer;
}