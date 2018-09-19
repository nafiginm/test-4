// Валидация имени
var myName = document.querySelector('#name');
myName.addEventListener('input', validMyName);
function validMyName() {
	var regMyName = this.value.replace(/[^\S{2,}]/, '');
	this.value = regMyName;
	
	if(this.value == '') {
		this.style.borderColor = "red";
	} else {
		this.style.borderColor = "green";
	}
}

// Валидация фамилии
var surname = document.querySelector('#surname');
surname.addEventListener('input', validSurname);
function validSurname() {
	var regSurname = this.value.replace(/[^\S{3,}]/, '');
	this.value = regSurname;

	if(this.value == '') {
		this.style.borderColor = "red";
	} else {
		this.style.borderColor = "green";
	}
}

// Валидация города
var city = document.querySelector('#city');
city.addEventListener('input', validCity);
function validCity() {
	var regCity = this.value.replace(/[^\S+]/, '');
	this.value = regCity;

	if(this.value == '') {
		this.style.borderColor = "red";
	} else {
		this.style.borderColor = "green";
	}
}


// Активная иконка
var elems = document.getElementsByClassName('icon');
for(var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', colorIcon);
}
function colorIcon() {
	for(var j = 0; j < elems.length; j++) {
		elems[j].style.background = '';
		elems[j].style.color = '';
	}
	this.style.background = '#2A2D37';
	this.style.color = '#fff';
}

// Проверка формы
var form = document.getElementById('myForm');
var inputs = form.getElementsByTagName('input');
for(var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('keyup', checkParams);
}
function checkParams() {
	var btn = document.querySelector('#btn');
	btn.disabled = myName.value && surname.value && city.value ? false : "disabled";
}

// Очистка поля
var clean = document.getElementsByTagName('input');
for(var i = 0; i < clean.length; i++) {
	this.clean[i].addEventListener('click', cleanField);
}
function cleanField(inputs) {
	this.value = '';
}