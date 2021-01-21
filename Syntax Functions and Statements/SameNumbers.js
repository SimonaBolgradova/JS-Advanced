function solve(input){
    input= input.toString()
    let isSame= true;
    let count=0;
for (let digit of input) {
    if (input[0]!==digit){
        isSame=false;
    }
    count+=Number(digit);
}

console.log(isSame);
return count;
}
console.log(solve(2222222))
