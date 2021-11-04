function solve(arr) {
    let obj = {};
    for (const line of arr) {
        const [name, quantity] = line.split(' => ');
        if (!obj.hasOwnProperty(name)) {
            obj[name] = Number(quantity);
        }else{
        obj[name] += Number(quantity);
        }
    }
    Object.entries(obj).forEach(e => {
            console.log( e[0] + ' => ' + Math.ceil(e[1]/ 1000));
        });

    };
   solve(['Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]);