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
				languageDropdown.classList.remove('language__list--active')
			} else {
				languageDropdown.classList.add('language__list--active')
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

	//свайпер карточек + сортировка
	let cardsSwiper = null

	function initCardsSwiper() {
		cardsSwiper = new Swiper('.product-card__inner', {
			loop: false,
			slidesPerView: 3,
			grid: {
				rows: 2,
			},
			spaceBetween: 20,
			pagination: {
				type: 'fraction',
				el: '.card-pagination',
			},
			navigation: {
				nextEl: '.card-next',
				prevEl: '.card-prev',
			},
			breakpoints: {
				301: { slidesPerView: 1 },
				401: { slidesPerView: 2 },
				601: { slidesPerView: 3 },
				1101: { spaceBetween: 20 },
			},
		})
		updateSwiperFraction()
	}

	function updateSwiperFraction() {
		const pagination = document.querySelector(
			'.card-pagination.swiper-pagination-fraction'
		)
		if (pagination) {
			const nodes = pagination.childNodes
			nodes.forEach(node => {
				if (
					node.nodeType === Node.TEXT_NODE &&
					node.textContent.includes('/')
				) {
					node.textContent = ' из '
				}
			})
		}
	}

	function extractDigits(value) {
		if (!value) return 0
		const text = String(value).replace(/\s|\u00A0/g, '')
		const match = text.match(/-?\d+/)
		return match ? Math.abs(parseInt(match[0])) : 0
	}

	document.addEventListener('DOMContentLoaded', () => {
		const productList = document.querySelector('.product-cards-list')
		if (!productList) return

		const initialOrder = Array.from(productList.children)

		initCardsSwiper()

		const getCardPrice = card => {
			const datasetPrice = parseInt(card.dataset.price)
			if (!Number.isNaN(datasetPrice)) return datasetPrice
			const priceNode = card.querySelector('.card-price__now')
			return extractDigits(priceNode ? priceNode.textContent : '0')
		}

		const getCardSale = card => {
			const datasetSale = card.dataset.sale
			if (datasetSale != null) return extractDigits(datasetSale)
			const saleNode = card.querySelector('.card-price__sale')
			return extractDigits(saleNode ? saleNode.textContent : '0')
		}

		const getCardStock = card => {
			const datasetStock = card.dataset.stock
			if (datasetStock) return datasetStock
			const soldOut = card.querySelector('.card-price__stock--soldout')
			return soldOut ? 'no-stock' : 'in-stock'
		}

		const reorderDom = newOrderNodes => {
			if (cardsSwiper) {
				cardsSwiper.destroy(true, true)
				cardsSwiper = null
			}
			newOrderNodes.forEach(node => productList.appendChild(node))
			initCardsSwiper()
		}

		const sortProducts = sortType => {
			if (sortType === 'popular') {
				reorderDom(initialOrder)
				return
			}

			const indexed = Array.from(productList.children).map((el, idx) => ({
				el,
				index: initialOrder.indexOf(el),
				price: getCardPrice(el),
				sale: getCardSale(el),
				stock: getCardStock(el),
			}))

			let comparator = null
			switch (sortType) {
				case 'asc':
					comparator = (a, b) => a.price - b.price || a.index - b.index
					break
				case 'desc':
					comparator = (a, b) => b.price - a.price || a.index - b.index
					break
				case 'sale':
					comparator = (a, b) => b.sale - a.sale || a.index - b.index
					break
				case 'stock':
					comparator = (a, b) => {
						const aRank = a.stock === 'in-stock' ? 0 : 1
						const bRank = b.stock === 'in-stock' ? 0 : 1
						return aRank - bRank || a.index - b.index
					}
					break
				default:
					return
			}

			indexed.sort(comparator)
			const newOrder = indexed.map(x => x.el)
			reorderDom(newOrder)
		}
		const filterList = document.getElementById('filter__list')
		if (filterList) {
			filterList.addEventListener('click', e => {
				const item = e.target.closest('li[data-sort]')
				if (!item) return
				const sortType = item.dataset.sort
				sortProducts(sortType)
			})
		}
	})

	document.addEventListener('DOMContentLoaded', () => {
		const themeSwitcher = document.querySelector('.theme-mode')

		themeSwitcher.addEventListener('click', () => {
			if (themeSwitcher.classList.contains('theme-mode--dark')) {
				themeSwitcher.classList.remove('theme-mode--dark')
			} else {
				themeSwitcher.classList.add('theme-mode--dark')
			}
		})
	})

	//tab
	document.addEventListener('DOMContentLoaded', () => {
		const tabControls = document.querySelector('.keywords-list')

		const productList = document.querySelector('.product-cards-list')
		const allSlides = productList ? Array.from(productList.children) : []

		tabControls.addEventListener('click', toggleTab)

		function toggleTab(event) {
			const tabControl = event.target.closest('.keywords-list__item')
			if (!tabControl) return
			event.preventDefault()

			const activeControl = document.querySelector(
				'.keywords-list__item--active'
			)
			if (activeControl) {
				activeControl.classList.remove('keywords-list__item--active')
			}
			tabControl.classList.add('keywords-list__item--active')
		}

		function rebuildSwiperWithSlides(slides) {
			if (!productList) return
			if (cardsSwiper) {
				cardsSwiper.destroy(true, true)
			}
			productList.innerHTML = ''
			slides.forEach(slide => productList.appendChild(slide))
			initCardsSwiper()
			updateSwiperFraction()
		}

		function filterTabs() {
			tabControls.addEventListener('click', e => {
				let target = e.target

				while (target && target !== tabControls && !target.dataset.id) {
					target = target.parentElement
				}

				if (target && target.dataset.id) {
					const itemId = target.dataset.id
					const filtered = allSlides.filter(slide =>
						slide.classList.contains(itemId)
					)
					rebuildSwiperWithSlides(filtered)
				}
			})
		}
		filterTabs()
	})
})()
