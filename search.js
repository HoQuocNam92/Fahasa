const search = document.querySelector('#search');
const dropdown = document.querySelector('.dropdown');



let data = [];



async function fetchAPI() {
  const res = await fetch('http://localhost:3000/sanpham');
  data.push(...await res.json())
  console.log("data", data)

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
      dropdown.style.display = 'block'
    }
  })

}
searchs()

function reSearchs() {

  const keyword = search.value.trim().toLowerCase();
  if (!keyword) {
    alert('Vui lòng không để trống ô tìm kiếm');
    return;
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].tensp.toLowerCase().includes(keyword)) {
      window.location.href = "filterProduct.html"
      return;
    }
    else {
      alert('Không tìm thấy sản phẩm');
      return;
    }
  }
}
