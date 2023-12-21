'use strict'

// -- ЗАВДАННЯ 1----------------------------------------------------------------

const regLogin = /^[A-Za-z]{4,16}$/;
const regEmail = /^\w+[\w\-.]*@[A-Za-z]+\.[A-Za-z.]+$/;
const regPass = /^[\w\-._]{4,16}$/;
const regArr = [regLogin, regPass, regEmail];
let userIndex = 0;
let arrUsers = [];

let formInputData = document.forms.inputdata;
let blockInfo = document.querySelector('.user-list__data.right')
let rowInfo = document.querySelector('.row-info');
let inputs = document.querySelector('.input-data').querySelectorAll('input');
let btnEditSaveUser = formInputData.btnEditUser;


function addUser() {
	let user = {};
	user.us_login = inputs[0].value;
	user.us_password = inputs[1].value;
	user.us_email = inputs[2].value;
	arrUsers.push(user);
}

function render() {
	let rowCounter = blockInfo.querySelectorAll('.row-info').length;
	if (rowCounter > 1) {
		for (let i = 0; i < rowCounter - 1; i++) {
			blockInfo.querySelectorAll('.row-info')[1].remove();
		}
	}
	let rowInfoDiv = rowInfo.getElementsByTagName('div');
	for (let i = 0; i < arrUsers.length; i++) {
		rowInfoDiv[0].textContent = i + 1;
		rowInfoDiv[1].textContent = arrUsers[i].us_login;
		rowInfoDiv[2].textContent = arrUsers[i].us_password;
		rowInfoDiv[3].textContent = arrUsers[i].us_email;
		let newrowInfo = rowInfo.cloneNode(true);
		newrowInfo.style.display = "flex";
		blockInfo.appendChild(newrowInfo);
	}
	formInputData.reset();
}

function deleteUser() {
	blockInfo.addEventListener('click', () => {
		if (event.target.className === "row-info__btn-del") {
			let counter = event.target.parentNode.parentNode.querySelector('div').textContent - 1;
			event.target.parentNode.parentNode.remove();
			arrUsers.splice(counter, 1);
			console.log(arrUsers);
		}
		render();
	})
}

deleteUser();

function editUser() {
	blockInfo.addEventListener('click', () => {
		if (event.target.className === "row-info__btn-edit") {
			userIndex = event.target.parentNode.parentNode.querySelector('div').textContent - 1;
			formInputData.inputLogin.value = arrUsers[userIndex].us_login;
			formInputData.inputPassword.value = arrUsers[userIndex].us_password;
			formInputData.inputEmail.value = arrUsers[userIndex].us_email;
			document.querySelector('.input-btn__editus').style.display = "block"
			document.querySelector('.input-btn__addus').style.display = "none"
		}
	})
}

editUser();

function saveEditUser() {
	formInputData.btnEditUser.addEventListener('click', () => {
		if (checkValue()) {
			let user = {};
			user.us_login = formInputData.inputLogin.value;
			user.us_password = formInputData.inputPassword.value;
			user.us_email = formInputData.inputEmail.value;
			arrUsers.splice(userIndex, 1, user);
			formInputData.reset();
			render();
			document.querySelector('.input-btn__editus').style.display = "none"
			document.querySelector('.input-btn__addus').style.display = "block"
		}
	})
}

saveEditUser();

function checkValue() {
	let inputsTrue = true;
	for (let i = 0; i < regArr.length; i++) {
		console.log(i, regArr[i].test(inputs[i].value));
		if (inputsTrue) {
			if (!regArr[i].test(inputs[i].value)) {
				console.log(inputs[i].value);
				inputsTrue = false;
			}
		}
	}
	return inputsTrue
}

formInputData.btnAddUser.addEventListener('click', () => {
	if (checkValue()) {
		addUser();
		render();
	}
})


// -- ЗАВДАННЯ 2----------------------------------------------------------------


// -- ЗАВДАННЯ 3----------------------------------------------------------------


// -- ЗАВДАННЯ 4----------------------------------------------------------------
