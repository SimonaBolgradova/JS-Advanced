function solve(num, a,b,c,d,e){
    num = Number(num);
    let commands = [a,b,c,d,e];
    for (const c of commands) {
        if (c== 'chop'){
            num/=2;
        }else if(c=='dice'){
            num=num**0.5;
        }
        else if(c=='spice'){
            num++;
        }
        else if (c=='bake'){
            num*=3;
        }else if (c=='fillet'){
            num-=num*0.2
        }
        console.log(num)
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
