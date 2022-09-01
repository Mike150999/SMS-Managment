

let switchToggle = document.querySelectorAll('.switch__toggle');
const button = document.querySelector('.button');
let select = document.querySelectorAll('.select');

const modalButtonYes = document.querySelector('.modal__button-yes'),
		modalButtonNo = document.querySelector('.modal__button-no');


const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('#closeModal'),
		modalTriggerSave = document.querySelector('[data-save]'),
		modalSave = document.querySelector('.modal-save'),
		modalCloseBtnSave = document.querySelector('#modal-close');

const buttonClose = document.querySelectorAll('.notifications__button');




// Удаления кнопок

buttonClose.forEach(item => {
	item.addEventListener('click', () =>{
		item.style.display = 'none';
	});
});


// Все успешно

function success() {
	alert('Все успешно');
}

modalButtonYes.addEventListener('click', () => {
	closeModalSave();
	setTimeout(success, 2000);
});

modalButtonNo.addEventListener('click', () => {
	closeModalSave();
});


// Модальное окно Сохранить
function openModalSave() {
	modalSave.classList.add('show');
	modalSave.classList.remove('hide');
	document.body.style.overflow = 'hidden';
}

modalTriggerSave.addEventListener('click', openModalSave);

function closeModalSave() {
	modalSave.classList.add('hide');
	modalSave.classList.remove('show');
	document.body.style.overflow = '';
}

modalCloseBtnSave.addEventListener('click', closeModalSave);

modalSave.addEventListener('click', (e) => {
	if (e.target === modalSave) {
		closeModalSave();
	}
});

document.addEventListener('keydown', (e) => {
	if (e.code === "Escape") {
		closeModalSave();
	}
});

// Модальное окно Детали

function openModal() {
	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';
}


modalTrigger.forEach(btn => {
	btn.addEventListener('click', openModal);
});


function closeModal() {
	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = '';
}


modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeModal();
	}
});

document.addEventListener('keydown', (e) => {
	if (e.code === "Escape") {
		closeModal();
	}
});




// По умолчанию


function changeToggleSelect() {
	switchToggle.forEach(btn => {
		btn.checked = true;
	});
	select.forEach(btn => {
		btn.selectedIndex = 0;
	});
	buttonClose.forEach(item => {
		item.style.display = 'block';
	});


}

button.addEventListener('click', changeToggleSelect);


	




