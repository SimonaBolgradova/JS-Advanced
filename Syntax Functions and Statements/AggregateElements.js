function solve(input){
console.log(input.reduce((a,b)=> a+b,0));
console.log(input.map(x=>1/x).reduce((a,b)=> a+b,0));
console.log(input.join(''))
}
solve([2, 4, 8, 16])
