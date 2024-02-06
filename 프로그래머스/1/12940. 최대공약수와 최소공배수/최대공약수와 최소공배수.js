function solution(n, m) {
    var answer = [];
    
    let n2 = Array(n).fill().map((v,i) => i+1).filter(v => n%v === 0)
    let m2 = Array(m).fill().map((v,i) => i+1).filter(v => m%v === 0)
    let arr = n2.filter(v => m2.includes(v))
    let 최대공약수 = Math.max(...arr)
    let 최소공배수 = n*m/최대공약수
    return [최대공약수 , 최소공배수];
}