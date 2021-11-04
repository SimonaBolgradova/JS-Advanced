function validate() {
  document.getElementById('email').addEventListener('change', onChange);
  function onChange(ev){
      const email = ev.target.value;
      let regex = /[a-z]+@[a-z]+\.[a-z]+/g;
      if (regex.test(email)){
          ev.target.className="";
      }
      else{
          ev.target.className='error'
      }
  }
}