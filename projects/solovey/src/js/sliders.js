import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const slidersInit = () => {
	const projectsSlider = new Swiper('.projects__slider', {
		slidesPerView: 'auto',
		spaceBetween: 10,
	});

	const examplesSlider = new Swiper('.examples__slider', {
		slidesPerView: 'auto',
		spaceBetween: 9,
		breakpoints: {
			767: { slidesPerView: 3, direction: 'vertical', spaceBetween: 0 }
		}
	});

	const worldSlider = new Swiper('.world__slider', {
		slidesPerView: 'auto',
		spaceBetween: 18,
		breakpoints: {
			767: { slidesPerView: 3, spaceBetween: 9 }
		}
	});
};

export default slidersInit;