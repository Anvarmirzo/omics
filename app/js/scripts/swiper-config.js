export function initSliders() {
	const headerSwiper = new Swiper('.hero-swiper', {
		loop: true,
		initialSlide: 1,

		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
			clickable: true,
		},
	});
}
