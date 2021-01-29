function solve(steps,length,speedKH){
    let speed= speedKH*1000/3600;
    let distance = steps*length;
let rest = Math.floor(distance/500)*60;
let time = distance/speed+rest;
let hours= Math.floor(time/60/60);
let minutes = Math.floor(time- hours*3600)/60;
let seconds = Math.floor(time-hours*60*60-minutes*60);
return `${(hours).toFixed(0).padStart(2,"0")}:${(minutes).toFixed(0).padStart(2,"0")}:${(seconds).toFixed(0).padStart(2,"0")}`
}
console.log(solve(4000, 0.60, 5))
