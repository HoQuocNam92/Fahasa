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

async function fetchAPI() {
    const res = await fetch('http://localhost:3000/sanpham');
    const data = await res.json();
    return data
}
fetchAPI()
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


async function renderProducts(data) {

    let setData = []
    const local = JSON.parse(localStorage.getItem('filteredProduct'))
    if (local) {
        setData.push(local);
        localStorage.removeItem('filteredProduct')

    }
    else {
        setData.push(...data)
    }

    console.log("Cehck da", setData)
    mainContent.style.display = 'none';
    mainContent2.style.display = 'block';
    if (setData.length > 0) {
        setData.forEach(item => {
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
const data = await fetchAPI()
renderProducts(data);


async function filterProducts(value) {
    const data = await fetchAPI();

    console.log("Check value", value)
    if (value === -1) {
        mainContent.style.display = 'block';
        mainContent2.style.display = 'none'
        mainContentProduct.innerHTML = '';
        return;
    }
    mainContentProduct.innerHTML = '';

    const [min, max] = value.split(' - ');

    const filterGia = data.filter((item) =>
        Number(item.gia) >= Number(min) && Number(item.gia) <= Number(max)
    )
    console.log("Check filterGia", filterGia)
    renderProducts(filterGia);

}

