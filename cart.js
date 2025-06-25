


const content = document.querySelector('.content');
const total = document.querySelector('.total')
const totalCheckout = document.querySelector('.checkout-total')



function renderCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((item) => {
        console.log(item)

        const div = document.createElement('div');
        div.classList.add('content-cart');
        div.id = `cart-${item.id}`;
        div.innerHTML =
            `
               <div class="checkbox" >
                                <input type="checkbox" name="checkbox">
                            </div>
                            <a href="details.html?id=${item.id}" class="cart-image">
                                <img src="${item.image[0]}" alt="">
                            </a>
                            <div class="cart-info">
                                <a href="details.html?id=${item.id}" class="info-name">${item.tensp}</a>
                                <div class="info-price">
                                   ${Number(item.gia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </div>
                            </div>
                            <div class="quantity">
                                <span>
                                    <span onclick ="decrease(${item.id})">
                                        
                                           <i class="fa-solid fa-minus"></i>
                                         
                                       
                                    </span>
                                    <span>
                                        <input name="quantity" type="text" minvalue="1" value="${item.quantity}">
                                    </span>
                                    <span onclick ="increase(${item.id})">
                                          <i class="fa-solid fa-plus"></i>
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
    cartFind.sum = Number(cartFind.gia) * cartFind.quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    document.querySelector(`#cart-${id} .price`).textContent = cartFind.sum.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    document.querySelector(`#cart-${id} .quantity input`).value = cartFind.quantity
    totalCart();
}
function decrease(id) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartFind = cart.find((item) => item.id == String(id));

    if (cartFind.quantity === 1) {
        deleteProuct(id);
        return;
    }
    cartFind.quantity -= 1;
    cartFind.sum = Number(cartFind.gia) * cartFind.quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    document.querySelector(`#cart-${id} .price`).textContent = cartFind.sum.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    document.querySelector(`#cart-${id} .quantity input`).value = cartFind.quantity
    totalCart()
}


function deleteProuct(id) {
    document.querySelector(`#cart-${id}`).remove();
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartFilter = cart.filter((item) => item.id !== String(id));
    console.log("Check cartfiltered", cartFilter)
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(cartFilter));
    alert('Xóa sản phẩm thành công !!')
    totalCart()
}


async function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const res = await fetch('http://localhost:3000/sanpham');
    const data = await res.json();
    let product = data.find((item) => (
        item.id === id
    ))
    product.quantity = 1;
    product.sum = Number(product.gia) * product.quantity;

    let productExists = cart.find((item) => (item.id === id));

    if (productExists) {
        productExists.quantity = productExists.quantity + 1;
        productExists.sum = Number(productExists.gia) * productExists.quantity;

    }
    else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Thêm sản phẩm thành công')
}
async function buyNow() {
    try {
        await addToCart();
        window.location.href = 'cart.html';
    } catch (err) {
        alert("Lỗi khi thêm giỏ hàng: " + err.message);
    }
}
function totalCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let totalCart = cart.reduce((total, item) => (total + (Number(item.gia) * item.quantity)), 0);
    total.textContent = totalCart.toLocaleString('vi-VN', { style: "currency", currency: "VND" })
    totalCheckout.textContent = totalCart.toLocaleString('vi-VN', { style: "currency", currency: "VND" })
}


totalCart();
renderCart();



