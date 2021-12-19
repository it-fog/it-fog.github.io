'use strict'

// -- ЗАВДАННЯ 1----------------------------------------------------------------

// -- ЗАВДАННЯ 2----------------------------------------------------------------
let blockSignUp = document.querySelector('.sign-up');
let blockSignOut = document.querySelector('.sign-out');
let enterForm = document.forms.accountForm;

enterForm.signUp.addEventListener('click', ()=> {
    document.querySelector('.formName').textContent = enterForm.firstName.value +" "+ enterForm.secondName.value;
    document.querySelector('.formMail').textContent = enterForm.emailAdress.value;
    blockSignUp.style.display = "none";
    blockSignOut.style.display = "block";
    enterForm.reset();
});

enterForm.position.addEventListener('change', ()=> {
    document.querySelector('.formPosit').textContent = event.target.value;
});

enterForm.addEventListener('click', ()=> {
    if(event.target.type == 'radio' && event.target.value == 'woman') {
        document.querySelector('.avatar').classList.add('avaWoman');
    }
})

enterForm.iAgree.addEventListener('click', ()=> {
    if(enterForm.iAgree.checked == true) {
        enterForm.signUp.disabled = false;
        enterForm.signUp.style.backgroundColor = '#1e8736';
    }
    else {
        enterForm.signUp.disabled = true;
        enterForm.signUp.style.backgroundColor = '#72c685';
    }
});

document.querySelector('.signOut').addEventListener('click', ()=> {
    blockSignUp.style.display = "block";
    blockSignOut.style.display = "none";
    document.querySelector('.avatar').classList.remove('avaWoman');
    enterForm.signUp.disabled = true;
    enterForm.signUp.style.backgroundColor = '#72c685';
})


// -- ЗАВДАННЯ 3----------------------------------------------------------------


// -- ЗАВДАННЯ 4----------------------------------------------------------------

