function solve(array){
    let result = {};
for (let i = 0; i < array.length; i+=2) {
    const element = array[i];
    result[element]=Number(array[i+1]);
}
    return result;
}
console.log(solve(
    ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']
))
