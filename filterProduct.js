const mainContent = document.querySelector('#main-content');
const mainContentProduct = document.querySelector('#main-content2 .products');
const mainContent2 = document.querySelector('#main-content2');
const checkBoxs = document.querySelectorAll('input[type="checkbox"]');

async function filterProduct() {
    const res = await fetch('products.html');
    const data = await res.text();
    mainContent.innerHTML = data;
    const script = document.createElement('script');
    script.src = 'products.js';
    document.body.appendChild(script);
}
filterProduct();


checkBoxs.forEach((checkbox) => {
    checkbox.addEventListener('input', () => {
        if (checkbox.checked) {
            checkBoxs.forEach((cb) => {
                if (cb !== checkbox) {
                    cb.checked = false
                }
            })
            filterProducts(checkbox.value);

        }
        else {
            filterProducts(-1);

        }
    })

})

async function filterProducts(value) {

    if (value === -1) {
        mainContent.style.display = 'block';
        mainContent2.style.display = 'none'
        mainContentProduct.innerHTML = '';

        return;
    }
    mainContentProduct.innerHTML = '';
    const res = await fetch('http://localhost:3000/sanpham');
    const data = await res.json();

    const [min, max] = value.split(' - ');
    let filterGia = [];
    console.log(filterGia)

    filterGia = data.filter((item) =>
        Number(item.gia) >= Number(min) && Number(item.gia) <= Number(max)
    )
    mainContent.style.display = 'none';
    mainContent2.style.display = 'block';
    if (filterGia.length > 0) {


        filterGia.forEach(item => {
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
        ${item.soluong}
        </p>
        </div>
        </div>
       `
            mainContentProduct.appendChild(div);
        });
    }
    else {
        mainContentProduct.textContent = 'Không có sản phẩm'
    }

}
