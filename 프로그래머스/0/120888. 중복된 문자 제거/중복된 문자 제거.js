function solution(my_string) {
    var answer = '';
    let arr = [...new Set(my_string)].join('')
    return arr;
}