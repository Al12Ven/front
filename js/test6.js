// Функция отправки запроса по id
async function id_to_server(id, obj_dom) {
	let url = `http://localhost/myserver/?id=${id}`
	let response = await fetch(url, {
		method: 'GET',
		headers: { Accept: 'application/json' },
	})

	let param = await response.json()

	obj_dom.innerHTML = param[0].name
	obj_dom.classList.add('active')

	//добавление элементов в цикле
	// for (let key in param) {
	// 	if (param.hasOwnProperty(key)) {
	// 		const par = document.querySelector('.block')
	// 		const newDiv = document.createElement('div')
	// 		newDiv.className = 'block_inner'
	// 		output_str = param[key].fam + param[key].name + param[key].ote
	// 		newDiv.innerHTML = output_str

	// 		par.appendChild(newDiv)
	// 	}
	// }
}

// Получение id по клику и отправка запроса на сервер
;[...document.querySelectorAll('a')].forEach((item, index) => {
	item.addEventListener('click', e => {
		let id = item.dataset.id
		let block_cont = document.querySelectorAll('.block_cont')
		for (var i = 0; i < block_cont.length; i++) {
			if (block_cont[i].classList.contains('active')) {
				block_cont[i].classList.remove('active')
			}
		}
		//
		id_to_server(id, block_cont[index])
	})
})