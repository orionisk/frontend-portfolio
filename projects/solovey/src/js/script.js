import MicroModal from 'micromodal';

import slidersInit from './sliders';
import menuInit from './menu';
import { isValidForm, inputsEvent } from './validate';


window.addEventListener('DOMContentLoaded', () => {

	// Sliders
	slidersInit();

	// Modals
	MicroModal.init();

	// Menu
	menuInit();

	const forms = document.querySelectorAll('.form');
	forms.forEach(form => {
		inputsEvent(form.querySelectorAll('input'));

		form.addEventListener('submit', function(e) {
			e.preventDefault();
			if (!isValidForm(form)) return;
			const body = new FormData(this);
			fetch('/mailer/sender.php', {
				method: 'POST',
				body
			})
				.then(console.log)
				.catch(console.error);
		});
	});
});