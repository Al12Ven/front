console.log('test4')

async function fetchData() {
	// prepar
	const param1 = '#param1'
	const param2 = '#param2'

	let url = `http://localhost/myserver/?param1=${param1.value}&param2=${param2.value}`
	let response = await fetch(url, {
		method: 'GET',
		headers: { Accept: 'application/json' },
	})

	let param = await response.json()

	// добавление элементов в цикле
	for (let key in param) {
		if (param.hasOwnProperty(key)) {
			const par = document.querySelector('.block')
			const newDiv = document.createElement('div')
			newDiv.className = 'block_inner'
			newDiv.innerHTML = param[key]
			par.appendChild(newDiv)
		}
	}
}

document.addEventListener('DOMContentLoaded', function () {
	fetchData()
})
