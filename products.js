

const productList = document.querySelector('.products');


async function fetchAPI() {
    const res = await fetch('http://localhost:3000/sanpham');
    const data = await res.json();
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML =
            `
        <div class="product__comming">
        <span>Sắp Có Hàng</span> </div>  
        <a href="details.html?id=${item.id}">
        <img src="${item.image[0]}" class="info-image" alt=""> 
        <div class="product__info">
        <img src="image/ico_trending.svg" alt="">
        <span class="info-name">${item.tensp} </span>
        </div>
        </a>
        <p class="price">${Number(item.gia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </p>
        <div class="text-progress-bar">
        <div class="text-progress">
        <p>
        Đã bán
        ${item.soluong}
        </p>
        </div>
        </div>
       `
        productList.appendChild(div);
    });
}

fetchAPI();