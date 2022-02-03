//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let aA = 10
let aB = 15
if (aA>aB){
    console.log(aA)
} else if (aA===aB){
    console.log('Числа рівні');
} else {
    console.log(aB);
}

//У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let apppartment = prompt("Number of your appartment (1-90)");
if (apppartment>0 && apppartment<=20){
    console.log("First entrance");
} else if (apppartment>=21 && apppartment<=48){
    console.log('Second entrance');
} else if (apppartment>=49 && apppartment<=90){
    console.log('Third entrance');
} else {
    console.log('Fail')
}

// Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let nmb = Math.random()*10
let number = Math.round(nmb)
switch (number){
    case 10:
        console.log(number);
        console.log('Correct');
        break;
    default:
        console.log(number);
        console.log('Wrong');
}

//Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
let x = 3
if (typeof x==="number"){
    console.log(1);
} else if (typeof x==="string"){
    console.log(2);
} else if (typeof x==="boolean" || typeof x==="object"){
    console.log(3);
} else {
    console.log('Try one more time');
}

// Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let tmp = Math.random()*70-30
let temp = Math.round(tmp)
if (temp>=10 && temp<=22){
    console.log(temp);
    console.log('Go to study');
} else {
    console.log(temp);
    console.log('Stay home and study Online');
}

//За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let xx = Math.random()*9+1;
let xX = Math.round(xx);
switch (xX){
    case 1:
        console.log(xX);
        console.log('You win Appartnemt');
        break;
    case 2:
        console.log(xX);
        console.log('You win Automobile');
        break;
    case 3:
        console.log(xX);
        console.log('You win Iphone');
        break;
    case 4:
        console.log(xX);
        console.log('You win SmartWatch');
        break;
    case 5:
        console.log(xX);
        console.log('You win book');
        break;
    default:
        console.log(xX);
        console.log('Wrong number')
}