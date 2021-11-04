function focus() {
  Array.from(document.querySelectorAll('input')).forEach(e=>{
      e.addEventListener('focus',onFocus);
      e.addEventListener('blur',onBlur);
  })
  function onFocus(ev){
    ev.target.parentNode.className='focused';
  }
  function onBlur(ev){
    ev.target.parentNode.className='blur';
  }
}