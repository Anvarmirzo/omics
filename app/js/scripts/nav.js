export function navEvent() {
	const btn = document.querySelector('.burger-btn');

	btn.addEventListener('click', function (e) {
		const nav = document.querySelector('.nav-menu');
		const body = document.querySelector('body');

		btn.classList.toggle('opened');
		nav.classList.toggle('active');
		nav.classList.contains('active')
			? body.classList.toggle('hidden')
			: body.classList.toggle('hidden');
	});
}
