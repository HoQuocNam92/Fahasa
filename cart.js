


const content = document.querySelector('.content');


function renderCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('content-cart');
        div.id = `cart-${item.id}`;
        div.innerHTML =
            `
               <div class="checkbox" >
                                <input type="checkbox" name="checkbox">
                            </div>
                            <a href="details.html?id=${item.id}" class="cart-image">
                                <img src="${item.img}" alt="">
                            </a>
                            <div class="cart-info">
                                <a href="details.html?id=${item.id}" class="info-name">${item.name}</a>
                                <div class="info-price">
                                   ${Number(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </div>
                            </div>
                            <div class="quantity">
                                <span>
                                    <span onclick ="decrease(${item.id})">
                                        <a href="#" >
                                            <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png"
                                                alt="">
                                        </a>
                                    </span>
                                    <span>
                                        <input name="quantity" type="text" minvalue="1" value="${item.quantity}">
                                    </span>
                                    <span onclick ="increase(${item.id})">
                                        <a href="#" >
                                            <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png"
                                                alt="">
                                        </a>
                                    </span>
                                </span>
                            </div>
                            <div class="price">
                                   ${Number(item.sum).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </div>
                            <div class="icon">
                                <i class="icon-trash fa-solid fa-trash" onclick="deleteProuct(${item.id})"></i>
                            </div>
        `
        content.appendChild(div);
    })
}


function increase(id) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartFind = cart.find((item) => item.id == String(id));
    cartFind.quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
}
function decrease(id) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartFind = cart.find((item) => item.id == String(id));
    console.log("Check quantity", cartFind.quantity)
    if (cartFind.quantity === 1) {
        deleteProuct(id);
        return;
    }
    cartFind.quantity -= 1;
    localStorage.setItem('cart', JSON.stringify(cart));

}


function deleteProuct(id) {
    document.querySelector(`#cart-${id}`).remove();
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartFilter = cart.filter((item) => item.id !== String(id));
    console.log("Check cartfiltered", cartFilter)
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(cartFilter));
    alert('Xóa sản phẩm thành công !!')
}


function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    fetch('data.json')
        .then(res => res.json())
        .then((data) => {
            let product = data.find((item) => (
                item.id === id
            ))
            product.quantity = 1;
            product.sum = Number(product.price) * product.quantity;

            let productExists = cart.find((item) => (item.id === id));

            if (productExists) {
                productExists.quantity = productExists.quantity + 1;
                productExists.sum = Number(productExists.price) * productExists.quantity;

            }
            else {
                cart.push(product);
            }

            product.total = cart.reduce((total, item) => total + item.sum, 0);
            console.log("check product", product.total)

            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Thêm sản phẩm thành công')
            renderCart();
        })
}


renderCart();