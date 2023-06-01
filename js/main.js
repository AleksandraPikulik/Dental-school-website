document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('#navbar');
	const navLink = document.querySelectorAll('.nav-link');
	const closeNav = document.querySelector('.collapse');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	navLink.forEach((item) =>
		item.addEventListener('click', () => closeNav.classList.remove('show'))
	);

	window.addEventListener('scroll', addShadow);
	navLink.addEventListener('click', removeShow);
});

