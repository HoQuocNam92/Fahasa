const employees = document.querySelector('#tab-employees .table-details');
const products = document.querySelector('#tab-products .table-details');
const customers = document.querySelector('#tab-customers .table-details');
const orders = document.querySelector('#tab-orders .table-details');
const salary = document.querySelector('#tab-salary .table-details');
const revenues = document.querySelector('#tab-revenue .table-details');
const calendar = document.querySelector('#tab-calendar .table-details');



const listTable = document.querySelectorAll('.tab-content');
const listOption = document.querySelectorAll('.list-option');


const openPopup = document.querySelector('.popup');



const urls = (path = "nhanvien") => {
    return `http://localhost:3000/${path}`
}

const fetchDB = async (path) => {
    const url = urls(path);
    const res = await fetch(url);
    const data = await res.json();
    return data;
}



fetchDB("nhanvien");

const form = (type) => {
    let obj = {}
    const formWrapper = document.querySelector(`.form-group[data-type="${type}"]`);
    const form = formWrapper.querySelector('form');
    const values = form.querySelectorAll('input');
    values.forEach((i) => {
        obj[i.id] = i.value;
    })
    return obj;
}

const formatMoney = (data) => {
    return Number(data).toLocaleString('vi-VN', {
        style: "currency", currency: "VND"
    })
}


// Employees

const getEmployees = async () => {
    const data = await fetchDB("nhanvien")
    data.forEach((item) => {
        const tr = document.createElement('tr');
        tr.id = `nhanvien-${item.id}`
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
                            <i onclick="deleteCustomers('nhanvien','${item.id}')" class="fa-solid fa-trash"></i>

                            <i onclick='handleOpen("nhanvien",${JSON.stringify(item)})'   class="fa-solid fa-pen">
                            </i>
                            </td>
            `
        employees.appendChild(tr)
    })
}

getEmployees();






// Products
const getProducts = async () => {
    const data = await fetchDB("sanpham")
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
    const data = await fetchDB("khachhang")
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
    const data = await fetchDB("donhang")

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
    const data = await fetchDB("luong")

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
    const data = await fetchDB("doanhthu")

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
    const data = await fetchDB("lichtrinh");
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




const deleteCustomers = async (type, id) => {
    const UrlNew = urls(type + '/' + String(id))
    console.log("check UrlNew", UrlNew)
    const option = {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
        }
    }
    await fetch(UrlNew, option);
    const deleteItem = document.querySelector(`#customers-${id}`);
    deleteItem.remove();
    alert('Xóa thành công')
}

const updateCustomer = async (type) => {
    const formWrapper = document.querySelector(`.form-group[data-type="${type}"]`);
    const forms = formWrapper.querySelector('form');
    const id = forms.dataset.id;
    const datas = form(type);
    const UrlNew = urls(type + '/' + String(id))

    await fetch(UrlNew, option("PUT", datas));
}



const createCustomer = async (type) => {
    const data = form(type);
    const url = urls(type);
    const res = await fetch(url, option("POST", data));
    const result = await res.json();
};















const openForm = (type) => {

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














const handleOpen = (type, product) => {

    openForm(type)

    const formWrapper = document.querySelector(`.form-group[data-type="${type}"]`);
    const form = formWrapper.querySelector('form');
    if (!product) {
        const values = form.querySelectorAll('input');
        values.forEach((i) => {
            i.value = "";
        })
        document.querySelector('#updateBtn').style.display = 'none'

    }
    else {
        for (let key in product) {
            const input = form.querySelector(`#${key}`);

            if (input) input.value = product[key];
        }
        form.dataset.id = product.id;
        document.querySelector('#submitBtn').style.display = 'none'
        document.querySelector('#updateBtn').style.display = 'block'
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



const option = (method, data) => {
    return {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
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


