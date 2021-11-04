function attachEventsListeners() {
    const input = document.getElementById('inputDistance');
    const output = document.getElementById('outputDistance');
    
    document.querySelector('div').addEventListener('click',(el)=>{
        if(el.target.type =='button'){
            const option = document.querySelector('inputUnits');
            console.log(option);
        }
    })
}