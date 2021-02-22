function addItem() {
    const text = document.getElementById('newItemText').value;
    const liElement= document.createElement('li');
    liElement.textContent=text;

    document.getElementById('items').appendChild(liElement);
}