// var emailArr=[];
// var passwordArr=[];
// function register(){
//     var email = document.getElementById("reEmail").value;
//     var password = document.getElementById('repw').value;
//     var rewritepw = document.getElementById("rerwp").value;
//     if(email==""){
//         document.getElementById('reEmail').style.border="1px solid red";
//     }
// }

const form = document.getElementById('register_form');
const email = document.getElementById('reEmail');
const password = document.getElementById('repw');
const rewritepw = document.getElementById('rerwp');
const fullname = document.getElementById('fullname');
const phonenumber = document.getElementById('phonenumber');
const address = document.getElementById('address');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();
    const pwValue = password.value.trim();
    const rewritepwValue = rewritepw.value.trim();
    const nameValue = fullname.value.trim();
    const phoneValue = phonenumber.value.trim();
    const addressValue = address.value.trim();

    if (emailValue === "") {
        //show error
        //show error class
        setErrorFor(email, "Nhập Email");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email không hợp lệ");
    } else {
        //add success class
        setSuccessFor(email);
    }

    if (pwValue === "") {
        setErrorFor(password, "Nhập mật khẩu");
    } else {
        setSuccessFor(password);
    }

    if (rewritepwValue === "") {
        setErrorFor(rewritepw, "Vui lòng nhập lại mật khẩu");
    } else if (rewritepwValue !== pwValue) {
        setErrorFor(rewritepw, "Mật khẩu không đúng");
    } else {

        setSuccessFor(rewritepw);
    }
    if (nameValue === "") {
        setErrorFor(fullname, "Nhập Họ và Tên");
    } else {

        setSuccessFor(fullname);
    }

    if (phoneValue === "") {
        setErrorFor(phonenumber, "Nhập số điện thoại");
    } else {

        setSuccessFor(phonenumber);
    }

    if (addressValue === "") {
        setErrorFor(address, "Nhập địa chỉ");
    } else {

        setSuccessFor(address);
    }

}

function setErrorFor(input, message) {
    const formRow = input.parentElement; //.signup_form-input
    const small = formRow.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formRow.className = 'signup_form-row error';
}

function setSuccessFor(input) {
    const formRow = input.parentElement;
    formRow.className = 'signup_form-row success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}