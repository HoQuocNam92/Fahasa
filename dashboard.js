const table = document.querySelector('.table-details');
const url = 'http://localhost:3000/customers'

const name = document.querySelector('#name')
const avatar = document.querySelector('#avatar')
const email = document.querySelector('#email')
const dob = document.querySelector('#dob')
const phone = document.querySelector('#phone')
const role = document.querySelector('#role')
const id = document.querySelector('#edit-id')
const title = document.querySelector('#form-title')

const openPopup = document.querySelector('.popup');

const form = () => {
    return {
        hoVaTen: name.value,
        anhThe: avatar.value,
        email: email.value,
        ngaySinh: dob.value,
        soDienThoai: phone.value,
        chucVu: role.value,
    }

}





const getCustomer = async () => {
    const res = await fetch(url);
    const data = await res.json();
    data.forEach((item) => {
        const tr = document.createElement('tr');
        tr.id = `customers-${item.id}`
        console.log("Check id", typeof item.id)
        tr.innerHTML =
            `
                            <td>${item.id}</td>
                            <td>${item.hoVaTen}</td>
                            <td>${item.anhThe}</td>
                            <td>${item.email}</td>
                            <td>${item.ngaySinh}</td>
                            <td>${item.soDienThoai}</td>
                            <td>${item.chucVu}</td>
                            <td>
                            <i onclick="deleteCustomers('${item.id}')" class="fa-solid fa-trash"></i>

                            <i onclick='openForm(${JSON.stringify(item)})'   class="fa-solid fa-pen">
                            </i>
                            </td>
            `
        table.appendChild(tr)
    })
}
getCustomer();

function openCreate() {
    openPopup.style.display = 'block';
    title.textContent = 'Thêm nhân viên'
    id.value = ""
    name.value = ""
    avatar.value = ""
    email.value = ""
    dob.value = ""
    phone.value = ""
    role.value = ""
}

function openForm(product) {

    openPopup.style.display = 'block';
    if (product) {
        title.textContent = 'Sửa nhân viên'
        id.value = product.id
        name.value = product.hoVaTen
        avatar.value = product.anhThe
        email.value = product.email
        dob.value = product.ngaySinh
        phone.value = product.soDienThoai
        role.value = product.chucVu
    }


}

function closeForm() {
    openPopup.style.display = 'none'
}

const handleSubmit = () => {
    ids = id.value;
    if (ids === "") {
        createCustomer();
    }
    else {
        updateCustomer();
    }
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
