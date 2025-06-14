const search = document.querySelector('#search');
const dropdown = document.querySelector('.dropdown');

fetch('data.json')
  .then(res => res.json())
  .then(data => {
     search.addEventListener('input',function(){
        const keyword = this.value.toLowerCase().trim();
        dropdown.innerHTML = ''
        if(keyword === "" ) {
          dropdown.style.display = 'none';
          return;

        }
        for(let i = 0 ; i<data.length;i++){
          if(data[i].name.toLowerCase().includes(keyword)){
              const item = document.createElement('div');
              const text = document.createElement('a');
              const img = document.createElement('img');
              item.classList.add('item');
              text.classList.add('text');
              text.textContent = data[i].name;
              text.href=`details.html?id=${data[i].id}`
              img.src = data[i].img;
              item.appendChild(img);
              item.appendChild(text);
              item.onclick = function() {
                search.value = data[i].name;
                dropdown.style.display = 'none';
              }
              dropdown.appendChild(item);
          }
          dropdown.style.display = 'block'
        }
     })
  })

