function solution(i, j, k) {
    var answer = 0;
    let arr = Array(j-i+1).fill().map((a,index) => i+index).join('').split(k).length-1
    return arr;
}