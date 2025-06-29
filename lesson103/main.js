console.log('lesson 94 \n')

const firstName = 'Sergei'
const lastName = 'Shmakov'
const age = 19
const city = 'Novosibirsk'
const role = 'A student at Aroken'
console.log(
	`Фамилия: ${lastName} \nИмя: ${firstName} \nВозраст: ${age} лет \nМесто жительства: ${city} \nСтатус: ${role}`
)

console.log('\n\n\nlesson 101\n')

const hello = name => {
	console.log(`Hello, ${name}`)
}
const name = 'Mike'
hello(name)

const arrayNumber = [12, 2, 34, 5, 52, 6, 6, 7, 34]
const twoDigitNumber = array => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 10) console.log(array[i])
	}
}
twoDigitNumber(arrayNumber)

const calculator = (operand1, operand2, operator) => {
	if (operator === '+') return operand1 + operand2
	else if (operator === '-') return operand1 - operand2
	else if (operator === '*') return operand1 * operand2
	else if (operator === '/') return operand1 / operand2
}
console.log(calculator(2, 3, '+'))
console.log(calculator(2, 3, '-'))
console.log(calculator(2, 3, '*'))
console.log(calculator(2, 3, '/'))

console.log('\n\n\nlesson 103\n')

const user = {
	firstName: 'Sergei',
	lastName: 'Shmakov',
	age: 19,
	city: 'Novosibirsk',
	role: 'A student at Aroken',
	helloName(name) {
		console.log(`Hello, ${name}`)
	},
}
console.log(user)
user.helloName('John')

const users = [
	{
		name: 'Grave',
		age: 21,
		admin: true,
	},
	{
		name: 'Steave',
		age: 23,
		admin: false,
	},
	{
		name: 'Dave',
		age: 27,
		admin: false,
	},
	{
		name: 'Igor',
		age: 32,
		admin: true,
	},
]

const isAdmin = array => {
	let result = 0
	for (let i = 0; i < array.length; i++) {
		if (array[i].admin !== true) result++
	}
	console.log(`Простых пользователей: ${result}`)
}
isAdmin(users)
