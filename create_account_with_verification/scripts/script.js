'use strict'

// -- ЗАВДАННЯ 1----------------------------------------------------------------

const regFirstName = /^[A-Za-z]{1,20}$/;
const regLastName = /^[A-Za-z]{1,20}$/;
// const regEmail = /^\w+[\w\-.]*@[A-Za-z]+\.[A-Za-z]+\.[A-Za-z]{2,3}$/;
const regEmail = /^\w+[\w\-.]*@[A-Za-z]+\.[A-Za-z.]+$/;
const regPass = /^\w{8,15}$/;

const regArr = [regFirstName, regLastName, regEmail, regPass];

let regForm =document.forms.regform;

//------- динамическая стилизация INPUT по oninput
function showImg(controlReg) {
    let evTarg = event.target;
    let param = controlReg.test(evTarg.value);

    if (evTarg.value.length === 0) {
        evTarg.style.paddingTop = `${0}px`;
        evTarg.parentElement.querySelector('.form-label').style.lineHeight = `${75}px`;
        evTarg.parentElement.querySelector('.form-label').style.fontSize = `${20}px`;
    } else {
        evTarg.style.paddingTop = `${40}px`;
        evTarg.parentElement.querySelector('.form-label').style.lineHeight = `${40}px`;
        evTarg.parentElement.querySelector('.form-label').style.fontSize = `${16}px`;
    }

    if (!param) {
        evTarg.parentElement.querySelector('.indOk').style.display = 'none';
        evTarg.parentElement.querySelector('.indWrong').style.display = 'block';
    } else {
        evTarg.parentElement.querySelector('.indWrong').style.display = 'none';
        evTarg.parentElement.querySelector('.indOk').style.display = 'block';
    }

    if (evTarg.name === "inFirstN" || evTarg.name === "inLastN") {
        if (evTarg.value.length < 3 || !param) {
            evTarg.parentElement.querySelector('.valid').style.display = 'block';
        } else {
            evTarg.parentElement.querySelector('.valid').style.display = 'none';
        }
    }

    if (evTarg.name === "inEmail" || evTarg.name === "inPass") {
        if (!param) {
            evTarg.parentElement.querySelector('.valid').style.display = 'block';
        } else {
            evTarg.parentElement.querySelector('.valid').style.display = 'none';
        }
    }

    if (evTarg.value === "") {
        evTarg.parentElement.querySelector('.indOk').style.display = 'none';
        evTarg.parentElement.querySelector('.indWrong').style.display = 'none';
        evTarg.parentElement.querySelector('.valid').style.display = 'none';
    }
}

regForm.inFirstN.oninput = ()=> {showImg(regFirstName)}
regForm.inLastN.oninput = ()=> {showImg(regLastName)}
regForm.inEmail.oninput = ()=> {showImg(regEmail)}
regForm.inPass.oninput = ()=> {showImg(regPass)}
//_________________________________________________________________________________


//  ---------ВАЛИДАЦИЯ--------------------------------------------------------------

let inputs = document.getElementById('reg-form').getElementsByTagName('input');
let btnSignUp = document.querySelector('.btn-signeup');

function checkValue() {
    let inputsTrue = true;
    for (let i=0; i<inputs.length; i++) {
        if (inputsTrue) {
            if (!regArr[i].test(inputs[i].value)) inputsTrue = false;
        }
    }
    return inputsTrue
}

document.querySelector('.iAgree').addEventListener('click', () => {
    if (event.target.checked === true) {
        if (checkValue()) {
            btnSignUp.disabled = false;
            btnSignUp.style.backgroundColor = "#0073fc";
        }
    } else {
        btnSignUp.disabled = true;
        btnSignUp.style.backgroundColor = "#4da2fc";
    }

})

//_____________________________________________________________________________


//-------------   POPUP ------------------------------------------------------


let formSignUp = document.forms.formSignUp;

formSignUp.signUp.addEventListener('click', ()=> {
    if(event.target.disabled === false) {
        document.querySelector('.popup').style.display= "block";
    }
})

document.querySelector('.start').addEventListener('click', ()=> {
    regForm.reset();
    document.querySelector('.popup').style.display= "none";
    formSignUp.iAgree.checked = false;
    formSignUp.signUp.disabled = true;
    btnSignUp.style.backgroundColor = "#4da2fc";
    document.querySelectorAll('.indOk').forEach(elem => {
        elem.style.display = "none"
    });
    
    document.querySelectorAll('.form-field').forEach(elem => {
        elem.querySelector('.form-label').style.lineHeight = `${75}px`;
        elem.querySelector('.form-label').style.fontSize = `${20}px`;
        elem.querySelector('input').style.paddingTop = `${0}px`;
        elem.querySelector('input').style.border ="2px solid #d4d8d7";   
    })

})


// ------ ФОКУС -----------------------------------------------------------

function inFocus() {
    event.target.style.border ="2px solid #d4d8d7";
    event.target.style.boxShadow ="0px 0px 2px 2px rgba(171,210,248,1)";
}

regForm.inFirstN.onfocus = ()=> {inFocus()}
regForm.inLastN.onfocus = ()=> {inFocus()}
regForm.inEmail.onfocus = ()=> {inFocus()}
regForm.inPass.onfocus = ()=> {inFocus()}

function outFocus(controlReg) {
    let param = controlReg.test(event.target.value);

    if(event.target.value.length === 0) event.target.style.boxShadow ="none";
    if(param) {
        event.target.style.boxShadow ="none";
        event.target.style.border ="3px solid #379354";
    }
}

regForm.inFirstN.onblur = ()=> {outFocus(regFirstName)}
regForm.inLastN.onblur = ()=> {outFocus(regLastName)}
regForm.inEmail.onblur = ()=> {outFocus(regEmail)}
regForm.inPass.onblur = ()=> {outFocus(regPass)}





// -- ЗАВДАННЯ 2----------------------------------------------------------------


// -- ЗАВДАННЯ 3----------------------------------------------------------------


// -- ЗАВДАННЯ 4----------------------------------------------------------------
