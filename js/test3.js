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
// },5000\


// const login = document.querySelector('#login')

// login.addEventListener('keyup', () => {
// 	d= login.value
// 	le= d.length


// 	const res = document.querySelector('#res')
// 	const exp = /[a-z]/

// 	if (exp.test(d) && le + 1 >= 12) {
// 		res.style.color = 'green'
// 		res.innerHTML = 'Количество символов удовлетворяет условие'
// 	} else{
// 		res.style.color = 'red'
// 		res.innerHTML = 'Количество символов =' + d.length+' меньше 12'
// 		// res.innerHTML = 'разрешены только маленькие буквы'
// 	}
// })

// window.addEventListener('load',function(){
// 	console.log('Страница готова')
// })

// const test= [10,2,6,54,5,-1];


// console.log("__________________");
// const hf =["Nick","Jim",13,];
// test.sort((a,b) => a-b);
// test.reverse();
// const ju=test.concat(hf);
// console.log(ju);
// console.log("__________________");
// const log=test.every(n=>n<0);
// console.log(log);
// console.log("__________________");
// const log2=test.some(n=>n<0);
// console.log(log2);
// console.log("__________________");
// console.log(test.includes(10));
// // test.pop();
// // test.shift();
// test.push(12);
// test.unshift("Tomm");
// console.log(test);



// //1 НУжно сложить массивы чтобы было [11,13,15,17,19]
// const a = [1,2,3,4,5];
// const b = [10,11,12,13,14];
// const result = a.map((v, i) => v + b[i]);
// console.log(result);

// //2  Сделать нормальный массив
// const mas = ["a",1,[2,3],[[4]],"5","s"];
// const ar = mas.flat(Infinity);
// const ta = ar.filter(c => typeof c === 'number' || (typeof c === 'string' && !isNaN(c)));
// const ap = ta.map(item => Number(item))
// console.log(ap);

// //3 Не знаю что делать (Задание)
// const ul = [1, , 2,8,7,3,4, "+",5];
// const peep = ul.slice();
// console.log(peep);


// //4 Не знаю Задание
// const past = [[0],[[1]],[[[3]]]];



// //5 Не знаю задание
// const chist = [1,2,3,4,5];

// var diesel = {
//   name: "Дизель",
//   species: "собака",
//   age: 1,
//   speak: function() { return this.name + " говорит гав-гав."; }
// };

// console.log(diesel.name + ' — это ' + diesel.species + ' ей ' + diesel.age + ' год.');
// console.log(diesel.speak());


// var Al = new Person("Al");

// function Person(name){
//    this.name = name;
// }

// Person.prototype.speak = function(){
//   alert("My name is, " + name);
// }

// var mum = new Person("mum");
// var dad = new Person("dad");

// console.log(mum.speak == dad.speak);


// class User {
//     name

//     constructor(name) {
//         this.name = name
//     }
// }

// const user = new User('Печорин')
// console.log(user.name) // Печорин


// class User {
//     #nameValue

//     constructor(name) {
//         this.name = name
//     }

//     get name() {
//         return this.#nameValue
//     }

//     set name(name) {
//         if (name === '') {
//             throw new Error('Имя пользователя не может быть пустым')
//         }
//         this.#nameValue = name
//     }
// }

// const user = new User('Печорин')
// console.log(user.name) // вызывается геттер, Печорин
// console.log(user.name = 'Бэла') // вызывается сеттер

// console.log(user.name = '') // Имя пользователя не может быть пустым


// class User {
//     name

//     constructor(name) {
//         this.name = name
//     }

//     getName() {
//         return this.name
//     }
// }

// class ContentWriter extends User {
//     posts = []
// }

// const writer = new ContentWriter('Лермонтов')

// console.log(writer.name) // Лермонтов
// console.log(writer.getName()) // Лермонтов
// console.log(writer.posts) // []

// class User {
//     name

//     constructor(name) {
//         this.name = name
//     }

//     getName() {
//         return this.name
//     }
// }

// class ContentWriter extends User {
//     posts = []

//     constructor(name, posts) {
//         super(name)
//         this.posts = posts
//     }
// }

// const writer = new ContentWriter('Лермонтов', ['Герой нашего времени'])
// console.log(writer.name) // Лермонтов
// console.log(writer.posts) // ['Герой нашего времени']


// class User {
//     name

//     constructor(name) {
//         this.name = name
//     }

//     getName() {
//         return this.name
//     }
// }

// class ContentWriter extends User {
//     posts = []

//     constructor(name, posts) {
//         super(name)
//         this.posts = posts
//     }

//     getName() {
//         const name = super.getName()
//         if (name === '') {
//             return 'Имярек'
//         }
//         return name
//     }
// }

// const writer = new ContentWriter('', ['Герой нашего времени'])
// console.log(writer.getName()) // Имярек
// console.log(writer instanceof ContentWriter) // true
// console.log(writer instanceof User) // true


// class Human{
//     name
//     constructor(name){
//         this.name=name
//     }
//     getName(){
//         return this.name
//     }
// }

// class Viking extends Human{

// }


// class Human
// {
//     name;
//     health = 100;
//     maxHealth = 100;
//     settlement;

//     constructor( name,  settlement)
//     {
//         this.name = name;
//         this.settlement = settlement;
//     }

//     getName()
//     {
//         return this.name;
//     }

//     getHealth()
//     {
//         return this.health;
//     }

//     getSettlement()
//     {
//         return this.settlement;
//     }

//     isAlive()
//     {
//         return this.health > 0;
//     }

//      takeDamage(damage)
//     {
//         this.health = max(0, this.health - damage);
//     }

//     heal(amount)
//     {
//         this.health = min(this.maxHealth, this.health + amount);
//     }

//     attack( target)
//     {
//         // Базовый метод атаки - переопределяется в наследниках
//     }


//     toString()
//     {
//         return "{this.name} ({this.health}/{this.maxHealth})";
//     }
// }

// /**
//  * Класс Жителя
//  */
// class Resident extends Human
// {
//     constructor(name, settlement)
//     {
//         super(name, settlement);
//     }

//     attack(target)
//     {
//         // Житель не может бить
//         console.log( "  {this.name} не умеет сражаться!\n");
//     }
// }

// /**
//  * Класс Воина
//  */
// class Warrior extends Human
// {
//     #damage = 10;

//     constructor(name,settlement)
//     {
//         super(name, settlement);
//     }

//     attack(target)
//     {
//         if (!target.isAlive()) {
//             return;
//         }

//         // Урон зависит от типа цели
//         if (target instanceof Resident) {
//             actualDamage = 15; // Урон жителю
//         } else {
//             actualDamage = this.damage; // Урон воину
//         }

//         target.takeDamage(actualDamage);
//         console.log("  {this.name} атакует {target.getName()} и наносит {actualDamage} урона!\n");
//     }
// }

// class Healer extends Human
// {
//     #healPower = 5;

//     constructor(name, settlement)
//     {
//         super(name, settlement);
//     }

//     attack(target)
//     {
//         // Лекарь не участвует в сражении
//         console.log( "  {this.name} не участвует в бою!\n");
//     }

//     healTarget(target)
//     {
//         if (!target.isAlive()) {
//             return;
//         }

//         target.heal(this.healPower);
//         console.log( "  {this.name} лечит {target.getName()} на {this.healPower} ед.\n");
//     }
// }

// /**
//  * Класс Поселения
//  */
// class Settlement
// {
//     #name;
//     #residents = [];
//     #warriors = [];
//     #healers = [];

//     constructor(name)
//     {
//         this.name = name;
//     }

//     getName()
//     {
//         return this.name;
//     }

//     addResident(resident)
//     {
//         this.residents = resident;
//     }

//     addWarrior(warrior)
//     {
//         this.warriors = warrior;
//     }

//     addHealer( healer)
//     {
//         this.healers = healer;
//     }

//     getAliveWarriors()
//     {
//         return array_filter;
//     }

//     getAliveResidents()
//     {
//         return array_filter;
//     }

//     getAliveHealers()
//     {
//         return array_filter;
//     }

//     hasAliveUnits()
//     {
//         return count(this.getAliveWarriors()) > 0 || 
//                count(this.getAliveResidents()) > 0;
//     }

//     getRandomAliveWarrior()
//     {
//         warriors = this.getAliveWarriors();
//         if (empty(warriors)) {
//             return null;
//         }
//         return warriors[array_rand(warriors)];
//     }

//     getRandomAliveResident()
//     {
//         residents = this.getAliveResidents();
//         if (empty(residents)) {
//             return null;
//         }
//         return residents[array_rand(residents)];
//     }

//     getRandomAliveHealer()
//     {
//         healers = this.getAliveHealers();
//         if (empty(healers)) {
//             return null;
//         }
//         return healers[array_rand(healers)];
//     }

//     getStats()
//     {
//         warriors = count(this.getAliveWarriors());
//         residents = count(this.getAliveResidents());
//         healers = count(this.getAliveHealers());
//         return "{this.name}: воинов={warriors}, жителей={residents}, лекарей={healers}";
//     }
// }




// class Game
// {
//     #settlement1;
//     #settlement2;
//     #round = 0;
//     #maxRounds = 1000;

//     constructor(settlement1, settlement2)
//     {
//         this.settlement1 = settlement1;
//         this.settlement2 = settlement2;
//     }



//     start()
//     {
//         console.log( "=== БИТВА НАЧАЛАСЬ! ===\n");
//         console.log( "{this.settlement1.getName()} против {this.settlement2.getName()}\n\n");

//         while (this.round < this.maxRounds) {
//             this.round++;
//             console.log( "--- Раунд {this.round} ---\n");

//             // Атака первого поселения на второе
//             this.performAttack(this.settlement1, this.settlement2);
            
//             // Лечение в первом поселении
//             this.performHealing(this.settlement1);
            
//             // Атака второго поселения на первое
//             this.performAttack(this.settlement2, this.settlement1);
            
//             // Лечение во втором поселении
//             this.performHealing(this.settlement2);

//             console.log("\nСтатус: {this.settlement1.getStats()} | {this.settlement2.getStats()}\n\n");

//             // Проверка победы
//             winner = this.checkWinner();
//             if (winner !== null) {
//                 console.log( "=== ИГРА ОКОНЧЕНА! ===\n");
//                 console.log( "Победитель: {winner.getName()}!\n");
//                 break;
//             }

//             if (this.round >= this.maxRounds) {
//                 console.log( "=== НИЧЬЯ! ===\n");
//                 console.log( "Достигнут лимит раундов.\n");
//             }
//         }
//     }

//     #performAttack(attacker, defender)
//     {
//         warrior = attacker.getRandomAliveWarrior();
//         if (warrior === null) {
//             return;
//         }

//         // Случайный выбор цели: воин или житель
//         target = null;
//         rand = rand(0, 1);
        
//         if ($rand === 0) {
//             target = defender.getRandomAliveWarrior();
//         } else {
//             target = defender.getRandomAliveResident();
//         }

//         if (target !== null) {
//             warrior.attack($target);
//         }
//     }

//     #performHealing(settlement)
//     {
//         healer = settlement.getRandomAliveHealer();
//         if (healer === null) {
//             return;
//         }

//         // Лекарь лечит случайного раненого союзника
//         $target = null;
//         $rand = rand(0, 2);
        
//         if (rand === 0) {
//             target = settlement.getRandomAliveWarrior();
//         }
//          else {
//             // Можно лечить и другого лекаря
//             target = settlement.getRandomAliveHealer();
//         }

//         if (target !== null && target.getHealth() < target.getHealth()) {
//             healer.healTarget(target);
//         }
//     }

//     #checkWinner()
//     {
//         s1Alive = this.settlement1.hasAliveUnits();
//         s2Alive = this.settlement2.hasAliveUnits();

//         if (!s2Alive && s1Alive) {
//             return this.settlement1;
//         }
//         if (!s1Alive && s2Alive) {
//             return this.settlement2;
//         }
//         return null;
//     }
// }


// vikings = new Settlement("Викинги");
// english = new Settlement("Англичане");

// // Создание персонажей для Викингов
// vikings.addWarrior(new Warrior("Рагнар", "Викинги"));
// vikings.addResident(new Resident("Бьорн", "Викинги"));
// vikings.addHealer(new Healer("Фрида", "Викинги"));

// // Создание персонажей для Англичан
// english.addWarrior(new Warrior("Эдвард", "Англичане"));
// english.addResident(new Resident("Томас", "Англичане"));
// english.addHealer(new Healer("Мэри", "Англичане"));

// // Создание и запуск игры
// game = new Game(vikings, english);
// console.log(game.start());


let str = 'A'
let regexp = /[abc]/
alert(regexp.test(str))