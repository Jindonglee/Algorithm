function solution(s) {
    var answer = 0;
    let array = s.split(" ")
    for (let i = array.length -1; i >= 0; i-- ){
        if(array[i] === 'Z'){
            array.splice(i-1,2)
        }
    }
    array = array.map(Number)
    if (array.length === 0){
        return 0
    }else {return array.reduce((a,c) => a+c)}
    
}