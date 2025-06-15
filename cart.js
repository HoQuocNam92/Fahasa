


const content = document.querySelector('.content');


function renderCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('content-cart');
        div.innerHTML =
            `
               <div class="checkbox">
                                <input type="checkbox" name="checkbox">
                            </div>
                            <a href="#" class="cart-image">
                                <img src="${item.img}" alt="">
                            </a>
                            <div class="cart-info">
                                <a href="#" class="info-name">${item.name}</a>
                                <div class="info-price">
                                   ${item.price}
                                </div>
                            </div>
                            <div class="quantity">
                                <span>
                                    <span>
                                        <a href="#">
                                            <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png"
                                                alt="">
                                        </a>
                                    </span>
                                    <span>
                                        <input name="quantity" type="text" minvalue="1" value="1">
                                    </span>
                                    <span>
                                        <a href="#">
                                            <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png"
                                                alt="">
                                        </a>
                                    </span>
                                </span>
                            </div>
                            <div class="price">
                                  ${item.price}
                            </div>
                            <div class="icon">
                                <i class="icon-trash fa-solid fa-trash"></i>
                            </div>
        `
        content.appendChild(div);
    })
}



function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    fetch('data.json')
        .then(res => res.json())
        .then((data) => {
            let item = data.find((item) => (
                item.id === id
            ))
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Thêm sản phẩm thành công')
            renderCart();
        })
}


renderCart();