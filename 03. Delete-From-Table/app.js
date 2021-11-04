function deleteByEmail() {
  const input = document.querySelector('input[name="email"]').value;
  const array = Array.from(document.querySelectorAll('tbody tr'));
  let deleted = false;
  for (const tr of array) {
      if(tr.children[1].textContent == input){
          tr.parentNode.removeChild(tr);
          deleted= true;
          document.getElementById('result').textContent='Deleted.'
      }
  }
  if(deleted!=true){
    document.getElementById('result').textContent='Not found.'
  }
}