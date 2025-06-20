
const price = document.querySelector('.details__price');
const name = document.querySelector('.details__title span');
const img = document.querySelector('.image-main img');

const thumbnails = document.querySelector('.thumbnails');
const imageMain = document.querySelector('.image-main img');

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')


const getData = async () => {
    const res = await fetch('http://localhost:3000/products');
    const data = await res.json();
    const product = data.find((item) => (item.id === id));
    price.textContent = Number(product.gia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    name.textContent = product.tensp;
    img.src = product.image[0];
    product.image.forEach((item, index) => {
        const thumb = document.createElement('img');
        thumb.src = item;
        thumb.classList.add('thumbnail');
        if (index === 0) thumb.classList.add('active');

        thumbnails.appendChild(thumb)
    })

    const thumbnail = document.querySelectorAll('.thumbnail');

    thumbnail.forEach((item) => {

        item.onclick = () => {
            thumbnail.forEach((items) => {
                items.classList.remove('active');
            })
            item.classList.add('active')
            imageMain.src = item.src;
        }
    })


}
getData()


