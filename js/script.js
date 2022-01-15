const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const passwordField = document.querySelector('.password-field');
const passwordCheckbox = document.querySelector('.password-checkbox');
const closed = document.querySelector('.closed');
const hiddenBlock = document.querySelector('.hidden-block');
const menu = document.querySelector('.menu');


closed.addEventListener('mouseover', changeover);
closed.addEventListener('mouseout', changeout);

menu.addEventListener('mouseover', changeover);
menu.addEventListener('mouseout', changeout);

function changeover () {
    this.style.height = 55 + 'px';
}

function changeout () {
    this.style.height = '';
}

// closed.onmouseover = function () {
//     closed.style.height = 55 + 'px';
// }

// closed.onmouseout = function () {
//     closed.style.height = '';
// }

closed.onclick = function () {
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

