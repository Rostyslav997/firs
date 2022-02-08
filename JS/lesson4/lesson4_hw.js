//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a,b) {
    let s = a*b;
    return s;
}
console.log('площа прямокутника',square(2,4))

//створити функцію яка обчислює та повертає площу кола з радіусом r
function squareCirc(r) {
    let s = 3.14*r**2;
    return s;
}
console.log('площа кола',squareCirc(5))

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCylin(r,h) {
    let s = 2*3.14*r*h;
    return s;
}
console.log('площа циліндра',squareCylin(2,8))

//створити функцію яка приймає масив та виводить кожен його елемент
function arrCycle(arr) {
    for (let arrElement of arr) {
        console.log(arrElement)
    }
}
let ar1 = [1,2,3,4,"hello", true];
arrCycle(ar1);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textCreat(txt){
    document.write(`<p>${txt}</p>`)
}
textCreat(`some text`)

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreat(a){
    document.write(`<ul>`);
    document.write(`<li>${a}</li>`)
    document.write(`<li>${a}</li>`)
    document.write(`<li>${a}</li>`)
    document.write(`</ul>`);
}
ulCreat('item')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreator(li,iter){
    document.write(`<ul>`);
    for (let i = 0; i < iter; i++) {
        document.write(`<li>${li}</li>`)

    }
    document.write(`</ul>`);
}
ulCreator('item in cycle',3)

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrOl(arr) {
    document.write(`<ol>`)
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ol>`)
}
arrOl(ar1)

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrayCreat(arr){
    for (let arrElement of arr) {
        document.write(`<div>`)
        document.write(`id: ${arrElement.id}, name: ${arrElement.name}, age: ${arrElement.age}`)
        document.write(`</div>`)
    }
}
let ob =[
    {
        id:1, name:"Dan", age:21
    },
    {
        id:2, name:"Nick", age:23
    },
    {
        id:2, name:"Sarah", age:20
    }
];
arrayCreat(ob)