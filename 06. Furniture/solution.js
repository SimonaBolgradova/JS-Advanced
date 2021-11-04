function solve() {

  const textareas = document.querySelectorAll('textarea');
  const buttons = document.querySelectorAll('button');
  const body = document.querySelector('tbody')
  buttons[0].addEventListener('click', function(e){
    const arr=JSON.parse(textareas[0].value);
  console.log(arr)
    
    for(let i=0; i<arr.length; i++){
      const tr = document.createElement('tr');
      const tdImg = document.createElement('td');
      const img = document.createElement('img');
      img.setAttribute('src',arr[i].img);
      tdImg.appendChild(img);
      const tdNama = document.createElement('td');
      const p = document.createElement('p');
      p.textContent=arr[i].name;
      tdNama.appendChild(p);
      const tdPrice = document.createElement('td');
      const pP= document.createElement('p');
      pP.textContent=arr[i].price;
      tdPrice.appendChild(pP);
      const tdDecor = document.createElement('td');
      const pD= document.createElement('p');
      pD.textContent=arr[i].decFactor;
      tdDecor.appendChild(pD);
      const tdCheck = document.createElement('td');
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      tdCheck.appendChild(input);

      tr.appendChild(tdImg);
      tr.appendChild(tdNama);
      tr.appendChild(tdPrice);
      tr.appendChild(tdDecor)
      tr.appendChild(tdCheck);
      body.appendChild(tr)
    }
  })
  buttons[1].addEventListener('click', function(e){
    const furniture =  Array.from(body.querySelectorAll('input[type=checkbox]:checked'))
    .map(input=>input.parentNode.parentNode);

    const result = {
      bought:[],
      totalPrice:0,
      decFactorSum:0
    }
    for(let row of furniture){
      const cells = row.children;
      const name = cells[1].children[0].textContent;
      result.bought.push(name);
      const price = Number(cells[2].children[0].textContent);
      result.totalPrice+= price;
      const factor = Number(cells[3].children[0].textContent);
      result.decFactorSum+=factor;
    }
textareas[1].value = `Bought furniture: ${result.bought.join(", ")}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${Number(result.decFactorSum/furniture.length)}`
  })
       
  }