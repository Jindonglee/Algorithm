function solution(price, money, count) {
    var answer = -1
    let cost = 0
    for(let i = 1; i < count+1; i++){
        cost += i*price 
    }
    let damage = money - cost
    if(damage > 0){
        answer = 0
    }else{
        answer = Math.abs(damage)
    }
    
    return answer
    
}