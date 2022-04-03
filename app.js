//alert('Who is here?')

//Переменные

//variable - var

//const firstName = 'Taras' //string


//const age = 35 // number
//const married = 'Has Wife'
//const family = 'has family'
//const dother = 'has young dother'
//const isProgramer = true //boolean

//console.log(age)

//const  _private = 'private'
//const _ = 'private'
//const $ = 'some value'

//const withNu5 = '5'
//const 5WithNum = '5' // error

//2 Мутирование

//console.log('Имя человека: ' + firstName + ',a возраст: ' + age + ',cемья: ' + family)
//alert ('Имя человека:' + firstName + ',а возраст человека: ' + age)


//const lastName = prompt('Введите фамилию')
//alert (firstName + '' + lastName)

//3 Операторы

//let currentYear = 2022
//const  birthYear = 1986
//const age = currentYear - birthYear
//console.log(age)

//const a = 10
//const b = 5

//let  c = 32
//c = c + a
//c += a
//c -= a
//c *= a
//c /= a
//console.log(a+b)

//console.log(a-b)
//console.log(a*b)
//console.log(a/b)
//console.log(currentYear++)
//console.log(currentYear)
//console.log(c)

//4 Типы данных
//const isProgramer = true
//const name = 'Taras'
//const age = 35
//let x
//console.log(typeof isProgramer)
//console.log(typeof name)
//console.log(typeof age)
//console.log(typeof x)
//console.log(typeof null)

//5 Приоритет операторов
//const  fullAge = 35
//const birthYear = 1986
//const currentYear = 2022
//const isFullAge = currentYear - birthYear >= fullAge
//console.log(isFullAge)

//6 Условны операторы
//const courseStatus = 'pending' // ready,fail,pending - status
//if (courseStatus === 'ready') {
//    console.log('Kурс,уже готов и его можно проходить')
//}
//else if (courseStatus === 'pending') {
//  console.log('Курс пока находиться в процессе разработки')
//}
//else  {
//    console.log('Курс не готов')
//}
//const isReady = false

//if (isReady) {
//    console.log('Все готово!')
//}else {
//    console.log('Все не готово!')
//}
// Тернарное выражение
//isReady ? console.log('Все готово!') : console.log('Все не готово!') // это условие равно условию выше const isReady
//const num1 = 42
//const num2 = '42'

//console.log(num1 === num2)

//7 Булевая логика
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

//8 Функции
//function calculateAge(year) {
//    return 2022 - year
//}
//console.log(calculateAge(2010))
//console.log(calculateAge(2015))
//console.log(calculateAge(2018))

//function logInfoAbout(name,year) {
//    const age = calculateAge(year)
//    if (age > 0) {
//        console.log('Человек по имени ' + name + ' сейчас имеет возвраст ' + age)
//    } else {
//        console.log('Вообще-то это уже будущее!')
//    }
//}

//logInfoAbout('Taras', 1986)
//logInfoAbout('Galina', 1987)
//logInfoAbout('Mariya', 2023)

//9 Массивы

//const cars = ['Mazda', 'Mersedes', 'Ford']
//const cars = ['Mazda', 'Mersedes', 'Ford']
//console.log(cars)
//console.log(cars.length)
//console.log(cars[0])
//console.log(cars[1])
//console.log(cars[2])


//cars [0] = 'Porshe'
//cars[3] = 'Mazda'
//console.log(cars.length)

//10 Циклы -cycle

//const cars = ['Mazda', 'Mersedes', 'Ford', 'Porshe']

//for (let i = 0; i < cars.length; i++) {
//    const car = cars[i]
//    console.log(car)
//}

//for (let car of cars) {
//    console.log(car)
//}

//11 Объект - object
//const person = {
//    firstName: 'Taras',
//    lastName: 'Tanaschuk',
//    year: 1986,
//    languages: ['Uk', 'En', 'Po'],
//    hasWife: true,
//    greet:function () {
//        console.log('greet')
//    }
//}
//console.log(person.firstName)
//console.log(person['lastName'])
//const key = 'year'
//console.log(person[key])
//person.hasWife = true
//person.isProgrammer = true
//console.log(person)
//person.greet()

















