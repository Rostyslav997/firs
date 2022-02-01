//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let mas = [1,2,3,4,5,6,7,8,9,10]
let result = mas.reduce(function(a, b) {
    return a + b;
});
console.log(result)

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book = {
    name:'The Brain',
    pages: 338,
    genre: 'Science',
    authors: 'N.Doige'
}

//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let arr = [
    book = {
        name:'The Brain',
        pages: 338,
        genre: 'Science',
        author: 'N.Doige'
    },
    book2 = {
        name:'American Sniper',
        pages: 448,
        genre: 'Authobiography',
        author: 'C.Kyle'
    }
]
console.log(book, book2)

//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
let height = 23
let width = 10
let s = height*width
console.log(s,'cm')

//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
let heightC = 10
let dC = 4
let sc = (dC/2)**2
let v = sc*heightC
console.log(v,'m')

//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3
let m = 4
p = n**2 + m**2
let k = Math.sqrt(p)
console.log(k)
