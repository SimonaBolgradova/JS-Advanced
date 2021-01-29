function solve(input){
let pattern = /[A-Za-z]+/g;
let match = input.match(pattern);
let result = [];
for (let word of match) {
    word = word.toLocaleUpperCase();
    result.push(word)
}
console.log(result.join(', '))
}
solve('Hi,?')
