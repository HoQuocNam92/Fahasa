const nextBtn = document.querySelector('#next')
const slides = document.querySelector('.slides')

let arr = []

fetch('http://localhost:3000/sanpham')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((item) => {
            arr.push(item);
            const div = document.createElement('div');
            div.classList.add('item');
            div.innerHTML =
                `
         <a href="details.html?id=${item.id}">
                            <img src="${item.image[0]}" class="info-image" alt="">
                            <div class="item__info">
                                <span class="info-name">${item.tensp}</span>
                            </div>
                        </a>
                        <p class="price-new">
                            <span>
                               ${Number(item.gia).toLocaleString('vi-VN', { style: "currency", currency: "VND" })} 
                            </span>
                            <span>
                                -13%
                            </span>
                        </p>
                        <div class="price-old">
                            250.000 đ
                        </div>
         `
            slides.appendChild(div);
        })
    })




nextBtn.addEventListener('click', function () {
    slides.style.transform = 'translateX(-100%)'
})