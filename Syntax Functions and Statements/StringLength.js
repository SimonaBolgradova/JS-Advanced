function solve (a,b,c){
let sum= a.length+b.length+c.length;
let average = Math.floor(sum/3);
console.log(sum);
return average;
}
console.log(solve('chocolate', 'ice cream', 'cake'))
