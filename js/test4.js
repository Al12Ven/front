// console.log('test4')

// async function fetchData() {
// 	// prepar
// 	const param1 = '#param1'
// 	const param2 = '#param2'

// 	let url = `http://localhost/myserver/?param1=${param1.value}&param2=${param2.value}`
// 	let response = await fetch(url, {
// 		method: 'GET',
// 		headers: { Accept: 'application/json' },
// 	})

// 	let param = await response.json()

// 	// добавление элементов в цикле
// 	for (let key in param) {
// 		if (param.hasOwnProperty(key)) {
// 			const par = document.querySelector('.block')
// 			const newDiv = document.createElement('div')
// 			newDiv.className = 'block_inner'
// 			newDiv.innerHTML = param[key]
// 			par.appendChild(newDiv)
// 		}
// 	}
// }

// document.addEventListener('DOMContentLoaded', function () {
// 	fetchData()
// })



async function fetchData(name,fam,ote, year,pass) {
	let url = `http://localhost/myserver/post?name=${name}&fam=${fam}&ote=${ote}&year=${year}&pass=${pass}`
	let response = await fetch(url, {
		method: 'POST',
		headers: { Accept: 'application/json' },
	})

	// let param = await response.json()
	//console.log(param)
}

function get_data_form() {
	//const forms = document.querySelectorAll('#form_reg')
	const btn_reg = document.querySelector('#btn_reg')
	btn_reg.addEventListener('click', event => {
		// валидация элементов

		const exp = /[a-z]/ 
		const name = document.querySelector('#name').value
		const fam = document.querySelector('#fam').value
		const ote = document.querySelector('#ote').value
		const year = document.querySelector('#exampleInputInt').value
		const pass = document.querySelector('#exampleInputPassword1').value


		// d = { name: name }
		if (exp.test(name) && exp.test(fam) && exp.test(ote) && exp.test(pass)){
			console.log('Истино')
			//d_to_server = JSON.stringify(d)
			//console.log(d_to_server)
			fetchData(name, fam, ote, year, pass)
		} else {
			console.log('Ложно')
		}

		event.preventDefault()
	})
}

document.addEventListener('DOMContentLoaded', function () {
	get_data_form()
})
