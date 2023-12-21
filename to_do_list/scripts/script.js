'use strict'

// -- ЗАВДАННЯ 1----------------------------------------------------------------


// -- ЗАВДАННЯ 2----------------------------------------------------------------

let lForm = document.forms.formTasks;
let rForm = document.forms.formAddTasks;

rForm.addtext.addEventListener('click', ()=> {
    if(!rForm.entertext.value) {
        document.querySelector('.popUpEnter').style.display = 'block';
        rForm.entertext.setAttribute("readonly", true);
		let inputDis = lForm.getElementsByTagName('input');
		for(let i=0; i<inputDis.length; i++){
			inputDis[i].setAttribute("disabled", true);
		}
	}
    else {lForm.insertAdjacentHTML('beforeend', `<p><input type="checkbox" name="task"> ${rForm.entertext.value}</p>`);
    };
rForm.reset();
});

lForm.addEventListener('click', (event)=> {
    if(lForm.getElementsByTagName('p').length == 1) {
        event.target.checked= false;
		document.querySelector('.popUpDel').style.display = 'block';
		rForm.entertext.setAttribute("readonly", true);
	}
    else if (event.target.type == 'checkbox') {
        event.target.parentNode.remove();
    }
})

document.querySelector('.alertclose').addEventListener('click', ()=> {
    document.querySelector('.popUpEnter').style.display = 'none';
	rForm.entertext.removeAttribute("readonly");
	let inputDis = lForm.getElementsByTagName('input');
		for(let i=0; i<inputDis.length; i++){
			inputDis[i].removeAttribute("disabled");
		}
})

document.querySelector('.popUpDel').addEventListener('click', ()=> {
	document.querySelector('.popUpDel').style.display = 'none';
	rForm.entertext.removeAttribute("readonly");
})

rForm.addtext.addEventListener('mousedown', ()=> {
    event.target.style.boxShadow = '0px 0px 5px 3px rgba(36,210,65,0.75)';
})
rForm.addtext.addEventListener('mouseup', ()=> {
    event.target.style.boxShadow = 'none';
})

// -- ЗАВДАННЯ 3----------------------------------------------------------------


// -- ЗАВДАННЯ 4----------------------------------------------------------------
