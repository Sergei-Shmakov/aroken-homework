;(function () {
	//burger
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

	//modal
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

	//tab
	const tabControls = document.querySelector('.tab-controls')
	tabControls.addEventListener('click', switchTab)

	function switchTab(e) {
		const tabControl = e.target.closest('.tab-controls__link')

		if (!tabControl) return
		e.preventDefault()
		if (tabControl.classList.contains('tab-controls__link--active')) return

		const tabContentID = tabControl.getAttribute('href')
		const tabContent = document.querySelector(tabContentID)
		const contentActive = document.querySelector('.tab-content--show')
		const controlsActive = document.querySelector('.tab-controls__link--active')

		if (contentActive) contentActive.classList.remove('tab-content--show')
		if (controlsActive)
			controlsActive.classList.remove('tab-controls__link--active')

		tabContent.classList.add('tab-content--show')
		tabControl.classList.add('tab-controls__link--active')
	}

	//accordion

	const accordionLists = document.querySelectorAll('.accordion-list')

	accordionLists.forEach(el => {
		el.addEventListener('click', e => {
			const accordionList = e.currentTarget
			const accordionOpenedItem = accordionList.querySelector(
				'.accordion-list__item--opened'
			)
			const accordionOpenedContent = accordionList.querySelector(
				'.accordion-list__item--opened .accordion-list__content'
			)

			const accordionControl = e.target.closest('.accordion-list__control')
			if (!accordionControl) return
			const accordionItem = accordionControl.parentElement
			const accordionContent = accordionControl.nextElementSibling

			if (accordionOpenedItem && accordionOpenedItem != accordionItem) {
				accordionOpenedItem.classList.remove('accordion-list__item--opened')
				accordionOpenedContent.style.maxHeight = null
			}
			accordionItem.classList.toggle('accordion-list__item--opened')

			if (accordionItem.classList.contains('accordion-list__item--opened')) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
			} else {
				accordionContent.style.maxHeight = null
			}
		})
	})

	//slider-gallery
	new Swiper('.gallery__slider', {
		spaceBetween: 15,
		slidesPerView: 1.5,
		pagination: {
			el: '.gallery__pagination',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.gallery__next',
			prevEl: '.gallery__prev',
		},
		breakpoints: {
			601: {
				slidesPerView: 3,
			},
			801: {
				spaceBetween: 32,
			},
			1101: {
				slidesPerView: 4,
			},
		},
	})

	//slider-feedback

	new Swiper('.testimonials__slider', {
		spaceBetween: 0,
		slidesPerView: 1,
		centeredSlides: true,

		navigation: {
			nextEl: '.testimonials__next',
			prevEl: '.testimonials__prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		},
		breakpoints: {
			// 601: {
			// 	slidesPerView: 3,
			// },
			901: {
				slidesPerView: 1.5,
			},
			1201: {
				slidesPerView: 2.05,
			},
		},
	})

	//mask

	const telInputs = document.querySelectorAll('input[type="tel"]')
	const im = new Inputmask('+7 (999) 999-99-99')
	im.mask(telInputs)
})()
