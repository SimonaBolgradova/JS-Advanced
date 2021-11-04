function addItem() {
    const text= document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    document.querySelector('article').addEventListener('click', (el)=>{
        if(el.target.type ==='button'){
            const select= document.getElementById('menu');
            select.textContent=text.value;
            const option =document.createElement('option')
            option.textContent=value.value;
            select.appendChild(option);
            text.value= '';
            value.value = '';
        }
    })
}
        
   
