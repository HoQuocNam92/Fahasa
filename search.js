const search = document.querySelector('#search');
const dropdown = document.querySelector('.dropdown');
const searchBtn = document.querySelector('.fa-magnifying-glass');


let data = [];



async function fetchAPI() {
  const res = await fetch('http://localhost:3000/sanpham');
  data.push(...await res.json())

}

fetchAPI();
function searchs() {
  search.addEventListener('input', function () {
    const keyword = this.value.toLowerCase().trim();

    dropdown.innerHTML = ''
    if (keyword === "") {
      dropdown.style.display = 'none';
      return;

    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].tensp.toLowerCase().includes(keyword)) {

        const item = document.createElement('div');
        const text = document.createElement('a');
        const img = document.createElement('img');
        item.classList.add('item');
        text.classList.add('text');
        text.textContent = data[i].tensp;
        text.href = `details.html?id=${data[i].id}`
        img.src = data[i].image[0];
        item.appendChild(img);
        item.appendChild(text);
        item.onclick = function () {
          search.value = data[i].tensp;
          dropdown.style.display = 'none';
        }
        dropdown.appendChild(item);
      }
    }
    dropdown.style.display = 'block'

  })

}
searchs()

function searchInput() {
  const keyword = search.value.toLowerCase().trim();
  console.log(keyword)
  if (!keyword) {
    alert('Vui lòng không để trống ô tìm kiếm');
    return;
  }
  const foundProduct = data.find(product =>
    product.tensp.toLowerCase().includes(keyword)
  );

  if (foundProduct) {
    localStorage.setItem('filteredProduct', JSON.stringify(foundProduct));
    window.location.href = 'filterProduct.html';
  } else {
    alert('Không tìm thấy sản phẩm');
  }

}

searchBtn.addEventListener('click', searchInput)
search.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    searchInput()
  }
});