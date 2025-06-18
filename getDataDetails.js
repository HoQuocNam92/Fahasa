const price = document.querySelector('.details__price');
const name = document.querySelector('.details__title span');
const img = document.querySelector('.image-main img');


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')
fetch('http://localhost:3000/products')
    .then((res) => res.json())
    .then((data) => {
        const product = data.find((item) => (item.id == id));
        price.textContent = Number(product.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        name.textContent = product.name;
        img.src = product.img;
    })