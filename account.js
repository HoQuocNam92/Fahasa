
const errorEmail = document.querySelector('.errorEmail');
const errorPassword = document.querySelector('.errorPassword');
const errorName = document.querySelector('.errorName');


const Email = document.querySelector('.register-form input.email')
const Password = document.querySelector('.register-form input.password');
const UserName = document.querySelector('.register-form input.username');
const login = document.querySelector('.login');
const register = document.querySelector('.register');

const registerSwitch = document.querySelector('.register-form');
const loginSwtich = document.querySelector('.login-form');
const loginBtn = document.querySelector('.loginBtn');
const registerBtn = document.querySelector('.registerBtn');





loginBtn.onclick = function () {
    registerSwitch.classList.remove('active')
    loginSwtich.classList.add('active');
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
}


registerBtn.onclick = function () {
    loginSwtich.classList.remove('active')
    registerSwitch.classList.add('active');
    loginBtn.classList.remove('active');
    registerBtn.classList.add('active');
}




document.querySelectorAll('.form-input.password').forEach(wrapper => {
    console.log("Check props", wrapper)
    const input = wrapper.querySelector('input.password');
    const toggle = wrapper.querySelector('.show');

    toggle.addEventListener('click', () => {
        console.log("Check toggle", toggle)
        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        toggle.textContent = isHidden ? 'Ẩn' : 'Hiện';
    });
});



function Register() {
    let isValid = true;
    let isRole = false;

    Email.innerHTML = "";
    Password.innerHTML = "";
    UserName.innerHTML = "";
    errorEmail.style.display = 'none';
    errorPassword.style.display = 'none';
    errorName.style.display = 'none';

    const email = Email.value;
    const password = Password.value;
    const username = UserName.value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.+[^\s@]+$/;
    if (!regexEmail.test(email)) {
        errorEmail.style.display = 'block';
        isValid = false;
    }
    const regexUserName = /^[a-zA-Z0-9]+$/;
    if (!regexUserName.test(username)) {
        errorName.style.display = 'block';
        isValid = false;
    }
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regexPassword.test(password)) {
        errorPassword.style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    let data = {
        email: email,
        password: password
    }
    let user = JSON.parse(localStorage.getItem('user')) || [];



    if (user && user.some(item => item.email === email)) {
        alert('Tài khoản của bạn đã tồn tại nhé !!')
        return;
    }

    if (username === 'admin') {
        data.role = 'admin';
        isRole = true;
    }

    user.push(data);
    localStorage.setItem('user', JSON.stringify(user));
    alert('Đăng ký thành công')
    window.location.href = 'account.html'


}

function Login() {
    const email = document.querySelector('.login-form input.email').value;
    const password = document.querySelector('.login-form input.password').value;
    const userDb = JSON.parse(localStorage.getItem('user'));


    let user = userDb.find((item) => (
        item.email === email && item.password === password
    ))

    if (user && user.role) {
        alert('Đăng nhập thành công');
        window.location.href = 'dashboard.html';
        return;
    }
    if (user) {
        alert('Đăng nhập thành công');
        window.location.href = 'index.html';
        return;
    }
    else {
        alert('Sai tài khoản hoặc mật khẩu !!');
    }

}