function addItem() {
    const text = document.getElementById('newText').value;
    const liElement= document.createElement('li',text);
    liElement.textContent=text;
    const deleteBtn = createElement('a','[Delete]');
    deleteBtn.href='#';
    deleteBtn.addEventListener('click',(ev)=>{
        ev.target.parentNode.remove();
    })
    liElement.appendChild(deleteBtn);
    document.getElementById('items').appendChild(liElement);

    function createElement(type,content){
        const element = document.createElement(type);
        element.textContent=content;
        return element;
    }
}