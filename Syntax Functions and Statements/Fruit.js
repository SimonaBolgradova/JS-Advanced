function solve (fruit, weight, money){
let money1 = weight*money/1000;
weight=weight/1000;
    console.log(`I need $${money1.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80)
