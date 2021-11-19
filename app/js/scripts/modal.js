export function modalEvent() {
	const btns = document.querySelectorAll('.modal-btn'),
		modal = document.querySelector('.modal'),
		modalForm = document.querySelector('.modal-form');

	if (btns.length && modal && modalForm) {
		for (const btn of btns) {
			btn.addEventListener('click', function (e) {
				modal.classList.add('active');
			});
		}

		modal.addEventListener('click', function (e) {
			if (e.eventPhase === 2) {
				modal.classList.toggle('active');
			}
		});

		modalForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const firstStep = modal.querySelector('.first-step'),
				secondStep = modal.querySelector('.second-step');

			if (firstStep && secondStep) {
				firstStep.classList.remove('active');
				secondStep.classList.add('active');

				const closeBtn = secondStep.querySelector('.btn');
				closeBtn.addEventListener('click', function (e) {
					modal.classList.remove('active');
					firstStep.classList.add('active');
					secondStep.classList.remove('active');
				});
			}
		});
	}
}
