function solution(n)
{
    var answer = 0;
   	return String(n).split('').reduce((acc,cur) => acc + Number(cur),0);

}