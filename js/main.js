;(function () {
	//burger
	document.addEventListener('click', burgerInit)
	function burgerInit(e) {
		const target = e.target
		const burgerIcon = target.closest('.burger-icon')
		const burgerNavLink = target.closest('.nav__link')
		if (!burgerIcon && !burgerNavLink) return
		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else {
			document.body.classList.remove('body--opened-menu')
		}
	}

	//language

	document.addEventListener('click', selectLanguage)
	function selectLanguage(e) {
		const languageSelector = document.querySelector('.language-selector')
		const selectedLanguage = languageSelector.querySelector(
			'.selected__language'
		)
		const languageDropdown = languageSelector.querySelector('.language__list')

		languageDropdown.querySelectorAll('li').forEach(item => {
			item.addEventListener('click', function () {
				const flagSrc = this.querySelector('img').src
				const langText = this.querySelector('span').textContent

				selectedLanguage.querySelector('img').src = flagSrc
				selectedLanguage.querySelector('.language-code').textContent = langText
			})
		})
		document.addEventListener('click', function (e) {
			if (!languageSelector.contains(e.target)) {
				languageDropdown.style.overflow = 'hidden'
				languageDropdown.style.opacity = '0'
			} else {
				languageDropdown.style.overflow = 'visible'
				languageDropdown.style.opacity = '1'
			}
		})
	}

	//button active

	document.addEventListener('DOMContentLoaded', function () {
		function checkRequiredFields(form) {
			const requiredInputs = form.querySelectorAll('input[required]')
			let allFilled = true
			requiredInputs.forEach(input => {
				if (!input.value.trim()) {
					allFilled = false
				}
			})
			return allFilled
		}
		function updateSubmitButton(form) {
			const submitButton = form.querySelector('button[type="submit"]')
			if (!submitButton) return
			const isFormValid = checkRequiredFields(form)
			if (isFormValid) {
				submitButton.classList.add('feedback__button--active')
				submitButton.disabled = false
			} else {
				submitButton.classList.remove('feedback__button--active')
				submitButton.disabled = true
			}
		}
		document.addEventListener('click', function (event) {
			const contactForm = event.target.closest('.form, form')
			if (contactForm) {
				const requiredInputs = contactForm.querySelectorAll('input[required]')
				requiredInputs.forEach(input => {
					input.addEventListener('input', function () {
						updateSubmitButton(contactForm)
					})
				})
				updateSubmitButton(contactForm)
			}
		})
		document.querySelectorAll('.form, form').forEach(form => {
			updateSubmitButton(form)
		})
	})
	//accordion

	const accordionLists = document.querySelectorAll('.accordion-list')

	accordionLists.forEach(el => {
		el.addEventListener('click', e => {
			const accordionList = e.currentTarget
			const accordionOpenedItem = accordionList.querySelector(
				'.accordion-list__item--opened'
			)
			const accordionOpenedContent = accordionList.querySelector(
				'.accordion-list__item--opened .accordion__item-text'
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

	const container = document.querySelector('.news-list')
	const button = document.querySelector('.show__more')

	button.addEventListener('click', function () {
		if (container.classList.contains('news-list--closed')) {
			container.classList.remove('news-list--closed')
			button.classList.add('show__more--close')
		} else {
			container.scrollTo({
				top: 0,
				behavior: 'smooth',
			})

			setTimeout(() => {
				container.classList.add('news-list--closed')
				button.classList.remove('show__more--close')
			}, 1)
		}
	})

	//показать еще спецпредложения
	document.addEventListener('DOMContentLoaded', function () {
		const container = document.getElementById('keywords-list')
		const btn = document.getElementById('keywords__full')

		btn.addEventListener('click', function () {
			if (container.classList.contains('keywords-list--open')) {
				container.style.maxHeight = '38px'
				container.classList.remove('keywords-list--open')
				btn.classList.remove('keywords__full--open')
				btn.textContent = 'Показать еще'
			} else {
				container.style.maxHeight = container.scrollHeight + 'px'
				container.classList.add('keywords-list--open')
				btn.classList.add('keywords__full--open')
				btn.textContent = 'Скрыть'
			}
		})
	})
	//filter
	document.addEventListener('click', function (e) {
		const filterSelector = document.querySelector('.filter-selector')
		const selectedFilter = filterSelector.querySelector('.selected__filter')
		const filterDropdown = filterSelector.querySelector('.filter__list')
		if (!selectedFilter.contains(e.target)) {
			filterDropdown.classList.remove('filter__list--active')
			selectedFilter.classList.remove('selected__filter--active')
		} else {
			filterDropdown.classList.toggle('filter__list--active')
			selectedFilter.classList.toggle('selected__filter--active')
		}
	})

	document.addEventListener('click', selectFilter)
	function selectFilter(e) {
		const filterSelector = document.querySelector('.filter-selector')
		const selectedFilter = filterSelector.querySelector('.selected__filter')
		const filterDropdown = filterSelector.querySelector('.filter__list')
		filterDropdown.querySelectorAll('li').forEach(item => {
			item.addEventListener('click', function () {
				const nowFilter = filterDropdown.querySelector(
					'.filter__list__item--active'
				)
				if (nowFilter) {
					nowFilter.classList.remove('filter__list__item--active')
				}
				const filterText = this.querySelector('span').textContent
				selectedFilter.querySelector('.filter-text').textContent = filterText
				item.classList.add('filter__list__item--active')
			})
		})
	}

	//cards
	document.addEventListener('DOMContentLoaded', () => {
		const numberInputs = document.querySelectorAll('.card-form__input')

		numberInputs.forEach(container => {
			const decrementBtn = container.querySelector('.input-decrement')
			const incrementBtn = container.querySelector('.input-increment')
			const input = container.querySelector('input[type="number"]')

			const updateButtons = () => {
				const min = parseInt(input.min) || 0
				decrementBtn.disabled = parseInt(input.value) <= min
			}

			decrementBtn.addEventListener('click', e => {
				e.preventDefault()
				const min = parseInt(input.min) || 0
				const current = parseInt(input.value) || min
				input.value = Math.max(min, current - 1)
				updateButtons()
			})

			incrementBtn.addEventListener('click', e => {
				e.preventDefault()
				const current = parseInt(input.value) || 0
				input.value = current + 1
				updateButtons()
			})

			input.addEventListener('input', updateButtons)
			updateButtons()
		})
	})
})()
