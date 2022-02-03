//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let rand = Math.random()*60
let time = Math.round(rand)
if (time<=15) {
    console.log(time)
    console.log('First');
} else if (time>15 && time<=30) {
    console.log(time)
    console.log('Second');
} else if (time>30 && time<=45){
    console.log(time)
    console.log('Third');
} else {
    console.log(time)
    console.log('Foutrh');
}

//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let den = Math.random()*31+1
let day = Math.round(den)
if (day<=10){
    console.log(day);
    console.log('First decade');
} else if (day>10 && day<=20) {
    console.log(day);
    console.log('Second decade');
} else {
    console.log(day);
    console.log("Third decade");
}

//У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
/*let test = confirm('Choose Ok or Cancel')
if (test === true) {
    console.log('Correct');
} else {
    console.log('Wrong')
}*/

let test = confirm('Choose Ok or Cancel') ? 'Correct' : 'Wrong';
console.log(test)

// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let aA = Math.random()*3;
let a = Math.round(aA);
if (a!==0){
    console.log(a);
    console.log('Correct');
} else {
    console.log(a);
    console.log('Wrong');
}

//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let week = prompt('serial number of the day of the week');
switch (week){
    case '1':
        console.log('Math');
        break;
    case '2':
        console.log('Physics');
        break;
    case '3':
        console.log('Chemistry');
        break;
    case '4':
        console.log('Physical training');
        break;
    case '5':
        console.log('Literature');
        break;
    case '6':
        console.log('History');
        break;
    case '7':
        console.log('Free day');
        break;
    default:
        console.log('Wrong answer')
}

//Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = prompt('Enter year (for example 2020)');
if (year%4===0){
    console.log('Високосний рік');
} else {
    console.log('Звичайний рік')
}

//Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let js = prompt('Яка "офіційна" назва JavaScript?')
if (js === 'ECMAScript'){
    console.log("Правильно!");
} else {
    console.log('Не знаєте? ECMAScript!')
}


