const employees = document.querySelector('#tab-employees .table-details');
const products = document.querySelector('#tab-products .table-details');
const customers = document.querySelector('#tab-customers .table-details');
const orders = document.querySelector('#tab-orders .table-details');
const salary = document.querySelector('#tab-salary .table-details');
const revenues = document.querySelector('#tab-revenue .table-details');
const calendar = document.querySelector('#tab-calendar .table-details');



const listTable = document.querySelectorAll('.tab-content');
const listOption = document.querySelectorAll('.list-option');
const name = document.querySelector('#name')
const avatar = document.querySelector('#avatar')
const email = document.querySelector('#email')
const dob = document.querySelector('#dob')
const phone = document.querySelector('#phone')
const role = document.querySelector('#role')
const id = document.querySelector('#edit-id')
const title = document.querySelector('#form-title')

const openPopup = document.querySelector('.popup');
const fetchDB = async (path = "employees") => {
    const url = `http://localhost:3000/${path}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
}



fetchDB("");



const formatMoney = (data) => {
    return Number(data).toLocaleString('vi-VN', {
        style: "currency", currency: "VND"
    })
}


// Employees

const getEmployees = async () => {
    const data = await fetchDB("employees")
    data.forEach((item) => {
        const tr = document.createElement('tr');
        tr.id = `customers-${item.id}`
        tr.innerHTML =
            `
                            <td>${item.id}</td>
                            <td>${item.manv}</td>
                            <td>${item.name}</td>
                            <td>${item.avatar}</td>
                            <td>${item.email}</td>
                            <td>${item.dob}</td>
                            <td>${item.gender}</td>
                            <td>${item.phone}</td>
                            <td>${item.role}</td>
                            <td>${item.phongban}</td>
                            <td>${item.ngayvaolam}</td>
                            <td>
                            <i onclick="deleteCustomers('${item.id}')" class="fa-solid fa-trash"></i>

                            <i onclick='openForm("nhanvien",${JSON.stringify(item)})'   class="fa-solid fa-pen">
                            </i>
                            </td>
            `
        employees.appendChild(tr)
    })
}

getEmployees();






// Products
const getProducts = async () => {
    const data = await fetchDB("products")
    data.forEach((item) => {
        const tr = document.createElement('tr');
        tr.id = `product-${item.id}`
        tr.innerHTML =
            `
                            <td>${item.id}</td>
                            <td>${item.masp}</td>
                            <td>${item.tensp}</td>
                            <td>${item.image}</td>
                            <td>${item.mota}</td>
                            <td>${formatMoney(item.gia)}</td>
                            <td>${item.soluong}</td>
                            <td>${item.danhmuc}</td>
                            <td>${item.nhacc}</td>
                            <td>${item.ngaytao}</td>
                            <td>
                            <i onclick="deleteCustomers('${item.id}')" class="fa-solid fa-trash"></i>

                            <i onclick='openForm("sanpham",${JSON.stringify(item)})'   class="fa-solid fa-pen">
                            </i>
                            </td>
            `
        products.appendChild(tr)
    })
}

getProducts();






// Customers

const getCustomer = async () => {
    const data = await fetchDB("customers")

    data.forEach((item) => {
        const tr = document.createElement('tr');
        tr.id = `customer-${item.id}`
        tr.innerHTML =
            `
                            <td>${item.id}</td>
                            <td>${item.makh}</td>
                            <td>${item.hoten}</td>
                            <td>${item.email}</td>
                            <td>${item.sdt}</td>
                            <td>${item.gioitinh}</td>
                            <td>${item.diachi}</td>
                            <td>${item.ngaydangky}</td>
                            <td>${item.trangthai}</td>
                            <td>
                            <i onclick="deleteCustomers('${item.id}')" class="fa-solid fa-trash"></i>

                            <i onclick='openForm("khachhang",${JSON.stringify(item)})'   class="fa-solid fa-pen">
                            </i>
                            </td>
            `
        customers.appendChild(tr)
    })
}


getCustomer()




// Orders
const getOrders = async () => {
    const data = await fetchDB("orders")

    data.forEach((item) => {
        const tr = document.createElement('tr');
        tr.id = `order-${item.id}`
        tr.innerHTML =
            `
                            <td>${item.id}</td>
                            <td>${item.madh}</td>
                            <td>${item.khachhang}</td>
                            <td>${item.nhanvien}</td>
                            <td>${item.ngaydat}</td>
                            <td>${item.ngaygiao}</td>
                            <td>${item.diachigiaohang}</td>
                            <td>${item.trangthai}</td>
                            <td>${formatMoney(item.tongtien)}</td>
                            <td>
                            <i onclick="deleteCustomers('${item.id}')" class="fa-solid fa-trash"></i>

                            <i onclick='openForm("donhang",${JSON.stringify(item)})'   class="fa-solid fa-pen">
                            </i>
                            </td>
            `
        orders.appendChild(tr)
    })
}


getOrders();





// Salary
const getSalary = async () => {
    const data = await fetchDB("salary")

    data.forEach((item) => {
        const tr = document.createElement('tr');
        tr.id = `salary-${item.id}`
        tr.innerHTML =
            `
                            <td>${item.id}</td>
                            <td>${item.manv}</td>
                            <td>${item.hoten}</td>
                            <td>${item.chucvu}</td>
                            <td>${item.thang}</td>
                            <td>${formatMoney(item.luongcoban)}</td>
                            <td>${formatMoney(item.phucap)}</td>
                            <td>${formatMoney(item.thuong)}</td>
                            <td>${formatMoney(item.khautru)}</td>
                            <td>${formatMoney(item.thucnhan)}</td>
                            <td>
                            <i onclick="deleteCustomers('${item.id}')" class="fa-solid fa-trash"></i>

                            <i onclick='openForm("luong",${JSON.stringify(item)})'   class="fa-solid fa-pen">
                            </i>
                            </td>
            `
        salary.appendChild(tr)
    })
}



getSalary();




const getRevenues = async () => {
    const data = await fetchDB("revenues")

    data.forEach((item) => {
        const tr = document.createElement('tr');
        tr.id = `revunue-${item.id}`
        tr.innerHTML =
            `
                            <td>${item.id}</td>
                            <td>${item.thoigian}</td>
                            <td>${item.tongdon}</td>
                            <td>${formatMoney(item.tongdoanhthu)}</td>
                            <td>${formatMoney(item.loinhuan)}</td>
                            <td>${formatMoney(item.chiphi)}</td>
                            <td>${item.tysuat}</td>
                            <td>${item.chitiet}</td>
                            <td>
                            <i onclick="deleteCustomers('${item.id}')" class="fa-solid fa-trash"></i>

                            <i onclick='openForm("doanhthu",${JSON.stringify(item)})'   class="fa-solid fa-pen">
                            </i>
                            </td>
            `
        revenues.appendChild(tr)
    })
}

getRevenues();






// Calendar

const getCalendar = async () => {
    const data = await fetchDB("calendar");
    data.forEach((item) => {
        const tr = document.createElement('tr');
        tr.id = `calendar-${item.id}`
        tr.innerHTML =
            `
                            <td>${item.id}</td>
                            <td>${item.malt}</td>
                            <td>${item.tieude}</td>
                            <td>${item.nhanvien}</td>
                            <td>${item.ngaybatdau}</td>
                            <td>${item.ngayketthuc}</td>
                            <td>${item.diadiem}</td>
                            <td>${item.ghichu}</td>
                            <td>${item.trangthai}</td>
                            <td>
                            <i onclick="deleteCustomers('${item.id}')" class="fa-solid fa-trash"></i>

                            <i onclick='openForm("lichtrinh",${JSON.stringify(item)})'   class="fa-solid fa-pen">
                            </i>
                            </td>
            `
        calendar.appendChild(tr)
    })
}


getCalendar();




//  

function openForm(type, product) {
    console.log("Check type ", product)
    const formWrapper = document.querySelector(`.form-group[data-type="${type}"]`);

    const form = formWrapper.querySelector('form');
    handleOpen(type);
    for (let key in product) {
        const input = form.querySelector(`#${key}`);
        if (input) input.value = product[key];
    }



}

function closePopup(type = "type") {
    document.querySelector('#overlay').style.display = 'none'
    document.querySelectorAll('.form-group').forEach((item) => {
        if (item.dataset.type === type) {
            item.style.display = 'none'
        }
        if (type === type) {
            item.style.display = 'none'

        }

    })

}

const handleOpen = (type) => {
    document.querySelector('#overlay').style.display = 'block'
    document.querySelectorAll('.form-group').forEach((item) => {
        if (item.dataset.type === type) {
            item.style.display = 'block'
        }
        else {

            item.style.display = 'none'
        }
    })
}


const option = (method, data) => {
    return {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
};




const deleteCustomers = async (id) => {
    const UrlNew = url + '/' + String(id);
    console.log("check id", id)
    const option = {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
        }
    }
    await fetch(UrlNew, option);
    const deleteItem = document.querySelector(`#customers-${id}`);
    deleteItem.remove();
}

const updateCustomer = async () => {

    const ids = id?.value;
    const data = form();
    const UrlNew = url + '/' + String(ids);
    const res = await fetch(UrlNew, option("PUT", data));
    console.log(res)
}



const createCustomer = async () => {
    const data = form();
    const res = await fetch(url, option("POST", data));
    const result = await res.json();
    console.log("Tạo mới thành công:", result);
};





listOption.forEach((item, index) => {

    item.onclick = () => {
        document.querySelector('.sidebar .active').classList.remove('active');
        item.classList.add('active')
        document.querySelector('.tab-content.active').classList.remove('active');
        listTable[index].classList.add('active')
    }
})






document.getElementById('overlay').addEventListener('click', function (e) {
    if (e.target === this) {
        closePopup();
    }
});


