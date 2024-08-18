const burger = document.getElementById('menu-burger');
const menu = document.getElementsByClassName('menu-nav')[0];
const overlay = document.querySelector('.overlay');

const menuInit = () => {
	burger.addEventListener('click', () => {
		menu.classList.toggle('active');
		overlay.classList.toggle('active');
		burger.classList.toggle('active');
	});

	window.onclick = e => {
		if (e.target.closest('.menu-nav, #menu-burger')) return;
		menu.classList.remove('active');
		overlay.classList.remove('active');
		burger.classList.remove('active');
	};
};

export default menuInit;