function solution() {
  let output = document.querySelector('textarea');
  let sum =0;
  let products =[];

  document.querySelector('.shopping-cart').addEventListener('click',(ev)=>{
     if(ev.target.tagName =='BUTTON'&& ev.target.className=='add-product'){
        const product = ev.target.parentNode.parentNode
        const title = product.querySelector('.product-title');
        const price = product.querySelector('.product-line-price');
        sum+= Number(price.textContent);
        products.push(title.textContent);
        output.value+= `Added ${title.textContent} for ${Number(price.textContent).toFixed(2)} to the cart.\n`

     }
  });

  document.querySelector('.checkout').addEventListener('click',()=>{
     const set = new Set (products);
     
     
        output.value+= `You bought ${Array.from(set).join(', ')} for ${sum.toFixed(2)}.`
     
  })
}