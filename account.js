const show = document.querySelector('.show');
const Email = document.querySelector('#Email');
const Password = document.querySelector('#Password');
const login = document.querySelector('.login');
const errorEmail = document.querySelector('.errorEmail');
const errorPassword = document.querySelector('.errorPassword');

let hide = true;
show.addEventListener('click',function(){
    if(hide === true) {
        hide = false;
     Password.type = 'text';
    }
        else {
        hide = true;
     Password.type = 'password';
    }
})


login.addEventListener('click',function(){
    Email.innerHTML ="" ;
    Password.innerHTML ="" ;

    errorEmail.style.display ='none';
    errorPassword.style.display ='none';

    const email = Email.value;
    const password = Password.value;

    const regexEmail = /^[^\s@]+@[^\s@]+\.+[^\s@]+$/;
    if(!regexEmail.test(email)){
        errorEmail.style.display ='block';
    }
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if(!regexPassword.test(password)){
        errorPassword.style.display ='block';
    }   
    

})