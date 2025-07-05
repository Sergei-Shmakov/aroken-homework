;(function () {
	document.addEventListener('click', burgerInit)
	function burgerInit(e) {
		const target = e.target
		const burgerIcon = target.closest('.burger-icon')
		const burgerNavLink = target.closest('.nav__link')
		if (!burgerIcon && !burgerNavLink) return
		if (document.documentElement.clientWidth > 900) return
		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else {
			document.body.classList.remove('body--opened-menu')
		}
	}
	const btn = document.querySelector('.about__img-button')
	const modal = document.querySelector('.modal')
	const body = document.body

	const modalActive = () => {
		modal.classList.add('modal--active')
		body.classList.add('body--opened-modal')
	}
	const modalClose = () => {
		modal.classList.remove('modal--active')
		body.classList.remove('body--opened-modal')
	}

	btn.addEventListener('click', modalActive)

	modal.addEventListener('click', event => {
		const target = event.target
		if (
			target.classList.contains('cancel') ||
			target.classList.contains('modal__button')
		)
			modalClose()
	})
	document.addEventListener('keydown', event => {
		if (event.code === 'Escape' && modal.classList.contains('modal--active'))
			modalClose()
	})
})()
