//Валидация почты
let email = 'ivan12@gmail.com'
const emailRegex = /^[a-zA-z][a-zA-Z0-9._-]+@[a-z]+\.[a-z]+$/
console.log(emailRegex.test(email))

//Валидация пароля
let pass = 'killua_arabov1212'
const passwordRegex = /^(?=.*\d)(?=.*[a-z0-9])(?=.*[A-Z0-9]).{8,}$/;
console.log(passwordRegex.test(pass))

//Валидация имени
let name = 'Oleg'
const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{2,50}$/;
console.log(nameRegex.test(name))


