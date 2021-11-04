function attachEventsListeners() {
   const div= document.querySelectorAll('div')
    div.addEventListener('click',(el)=>{
        if(el.target.tagName==='INPUT' && el.target.value=='Convert'){
           const d= document.querySelector('days').value 
           const h= document.querySelector('hours').value 
            const min =document.querySelector('minutes').value 
            const sec= document.querySelector('seconds').value;
            h=d*24;
            min =d*1440;
            sec= d*86400;
            if(h>47){
                d=2;
            }
console.log('ghj')
        }
    })

}