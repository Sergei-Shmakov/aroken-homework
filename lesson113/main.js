const btn = document.querySelector('.button')
const modal = document.querySelector('.modal')
const body = document.body

const modalActive = () => {
	modal.classList.add('modal--active')
	body.classList.add('body--fixed')
}
const modalClose = () => {
	modal.classList.remove('modal--active')
	body.classList.remove('body--fixed')
}

btn.addEventListener('click', modalActive)

modal.addEventListener('click', event => {
	const target = event.target
	if (
		(target && target.classList.contains('modal')) ||
		target.classList.contains('modal__close')
	)
		modalClose()
})
document.addEventListener('keydown', event => {
	if (event.code === 'Escape' && modal.classList.contains('modal--active'))
		modalClose()
})
