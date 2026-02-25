// const param_main = document.querySelector("#param_main")
// //alert(param_main)
// param_main.classList.remove('main')
// //param_main.removeAttribute("class")
// param_main.setAttribute("class","main_new")

// const h1 = document.createElement("h1")
// const h1_txt = document.createTextNode("Hello world")
// h1.appendChild(h1_txt)
// console.log(h1)

// param_main.appendChild(h1)

// const param_h1 = document.querySelector("#param_main h1")
// console.log(param_h1)


// param_h1.setAttribute("id", "para_h1")
// param_h1.setAttribute("class", "head")


// param_h1.style.color = "red"
// param_h1.style.backgroundColor = "yellow"
// param_h1.style.fontSize = "22px"


//const div = document.createElement("div")
//const div1 = document.createElement("div1")
//div.style.bacgroundImage = "url('D:/3IP1/project/img/i.jpg')"
//div.style.width = "300px"
//div.style.height = "300px"
//div.style.color = "red"
//div.style.margin = "0 auto"

//div.appendChild(div1)

// const btn = document.querySelector("#btn")
// btn.addEventListener('click', () => {
// 	const checkbox = document.querySelectorAll("input[type='checkbox']")
// 	for(let i=0;i<checkbox.length;i++){
// 		if (checkbox[i].checked == true){
// 			console.log(checkbox[i].name)
// 		}
// 	}
	
// 	const radio = document.querySelectorAll("input[type='radio']")
// 		for(let i=0;i<radio.length;i++){
// 			if (radio[i].checked == true){
// 				console.log(radio[i].value)
// 		}
// 	}

// })

// async function fetchData() {

// 		//prepar
// 	const param1 = document.querySelector('#param1')
// 	const param2 = document.querySelector('#param2')
// 	console.log(param1.value,param2.value)


// 	let url = `http://localhost/myserver/?param1=${param1.value}&param2=${param2.value}`
// 	let response = await fetch(url, {
// 		method: 'GET',
// 		hearders: {Accept: 'application/json'},
// 	})

// 	let param = await response.json()

// 	// const name = document.querySelector('#name')
// 	// name.innerHTML = param.name
// 	// const age = document.querySelector('#age')
// 	// age.innerHTML = param.age
// 	// const city = document.querySelector('#city')
// 	// city.innerHTML = param.city
// 	const p1 = document.querySelector('#p1')
// 	p1.innerHTML = param.p1
// 	const p2 = document.querySelector('#p2')
// 	p2.innerHTML = param.p2
// 	const res = document.querySelector('#res')
// 	res.innerHTML = param.res
// 	const res1 = document.querySelector('#res1')
// 	res1.innerHTML = param.res1
// 	const res2 = document.querySelector('#res2')
// 	res2.innerHTML = param.res2
// 	const res3 = document.querySelector('#res3')
// 	res3.innerHTML = param.res3
	
	

// }
// const mbtn = document.querySelector('#btn')
// btn.addEventListener('click', () => {
// 	fetchData()
// })

// const test = document.querySelector('.test')
// console.log(test)

// test.addEventListener('click', () => {
// 	console.log(test)
// 	test.style.width = '300px'
// 	test.style.height = '300px'
// 	test.style.marginLeft='300px'
// 	test.style.backgroundColor = 'lightblue'
// 	test.setAttribute('class', 'zag')
// 	test.removeAttribute('id')
// })

// const zag = document.querySelector('.zag1')
// if (zag) {
// 	zag.addEventListener('click', () => {
// 	zag.style.width = '100px'
// 	zag.style.height = '100px'
// 	zag.style.backgroundColor = 'green'
// 	zag.removeAttribute('class')
// 	})


// }

// const he1 = document.querySelector('h1')
// function myf(e){
// 	// block.style.backgroundColor = 'yellow'
// 	const log = document.querySelector('#log')
// 	log.textContent +=` ${e.code}`
	
// }

// // he1.addEventListener('click', h1)
// const inp = document.querySelector('#inp')
// inp.addEventListener('keydown', myf)

// const element =  document.querySelector('#block')
// element.style.opacity = 0

// setTimeout(() => {
// 	const interval = setInterval(() => {
// 		element.style.opacity = parseFloat(element.style.opacity) + 0.1
// 		if (element.style.opacity >= 1){
// 			clearInterval(interval)
// 		}
// 	},10)
// },5000)

window.addEventListener('load',function(){
	console.log('Страница готова')
})








