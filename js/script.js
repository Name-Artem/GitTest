const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const passwordField = document.querySelector('.password-field');
const passwordCheckbox = document.querySelector('.password-checkbox');



first.onclick = function () {
    console.log ('work');
}

second.onclick = function () {
    console.log ('good');
}

third.onclick = function () {
    console.log ('fine');
}

passwordCheckbox.onclick = function(){
    if (passwordCheckbox.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}   
