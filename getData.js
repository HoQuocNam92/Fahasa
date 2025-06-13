 

 const productList = document.querySelector('.products');

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {

       const div = document.createElement('div');
       div.classList.add('product');
       div.innerHTML =
       `
        <div class="product__comming">
        <span>Sắp Có Hàng</span> </div>  
        <a href="details.html?id=${item.id}">
        <img src="${item.img}" class="info-image" alt=""> 
        <div class="product__info">
        <img src="image/ico_trending.svg" alt="">
        <span class="info-name">${item.name} </span>
        </div>
        </a>
        <p class="price">${item.price} </p>
        <div class="text-progress-bar">
        <div class="text-progress">
        <p>
        ${item.stock}
        </p>
        </div>
        </div>
       `
      productList.appendChild(div);
    });
  });
