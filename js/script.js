const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const passwordField = document.querySelector('.password-field');
const passwordCheckbox = document.querySelector('.password-checkbox');
const close = document.querySelector('.close');
const hiddenBlock = document.querySelector('.hidden-block');
const menu = document.querySelector('.menu');


close.onclick = function () {
    hiddenBlock.style.display = 'none';
}
 
menu.onclick = function () {
    hiddenBlock.style.display = 'flex';
}

first.onclick = function () {
    alert ('This is not the button you are looking for!');
}

second.onclick = function () {
    confirm ('Do you think this is a good button?');
}

third.onclick = function () {
    prompt ('Which button would you like?');
}

passwordCheckbox.onclick = function(){
    if (passwordCheckbox.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}   

