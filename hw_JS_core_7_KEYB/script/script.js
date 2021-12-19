'use strict'

// -- ЗАВДАННЯ 1----------------------------------------------------------------

let eWindow = document.querySelector('.enterWindow');
let text;
window.addEventListener('keydown', function (event) {
    if ((event.keyCode <= 90 && event.keyCode >= 48)) eWindow.innerHTML += event.key;
    
    switch(event.keyCode) {
        case 13: eWindow.innerHTML += '</br>'; break;
        case 32: eWindow.innerHTML += event.key; break;
        case 186: eWindow.innerHTML += event.key; break;
        case 186: eWindow.innerHTML += event.key; break;
        case 187: eWindow.innerHTML += event.key; break;
        case 188: eWindow.innerHTML += event.key; break;
        case 189: eWindow.innerHTML += event.key; break;
        case 190: eWindow.innerHTML += event.key; break;
        case 191: eWindow.innerHTML += event.key; break;
        case 192: eWindow.innerHTML += event.key; break;
        case 219: eWindow.innerHTML += event.key; break;
        case 220: eWindow.innerHTML += event.key; break;
        case 221: eWindow.innerHTML += event.key; break;
        case 222: eWindow.innerHTML += event.key; break;
    }

    if (event.keyCode == 9) {
        eWindow.focus();
        event.preventDefault();
        eWindow.innerHTML += "   ";
    }

    if (event.keyCode == 20) {
        document.querySelector('.row-item[data="caps20"]').classList.toggle('active')
        console.log(document.querySelector('.row-item[data="caps20"]'));
    }

    if (event.key == 'Backspace') {
        eWindow.innerHTML = eWindow.innerHTML.slice(0, this.length - 1);
    }

    document.querySelector('.row-item[data="' + event.keyCode + '"]').style.backgroundColor = "gray"
    
})

window.addEventListener('keyup', function(event) {
    document.querySelector('.row-item[data="'+event.keyCode+'"]').style.backgroundColor = "white";
})



// -- ЗАВДАННЯ 2----------------------------------------------------------------



// -- ЗАВДАННЯ 3----------------------------------------------------------------


// -- ЗАВДАННЯ 4----------------------------------------------------------------

