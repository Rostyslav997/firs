//створити функцію яка обчислює та повертає площу прямокутника
let sqr = (a,b) => a*b;
console.log('площа прямокутника',sqr(5,4))

//створити функцію яка обчислює та повертає площу кола
let sqrCirc = (r) => 3.14*r**2;
console.log('площа кола', sqrCirc(5));

//створити функцію яка обчислює та повертає площу циліндру
let sqrCylin = (r,h) => 2*3.14*r*h;
console.log(sqrCylin(2,8))

//створити функцію яка приймає масив та виводить кожен його елемент
let arrCycle = (arr) => {
    for (i of arr) {
        console.log(i)
    }
}

arr1 = [1,2,3,'hello', true];
arrCycle(arr1)

//створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let pCreat = (txt) => document.write(`<p>${txt}</p>`)
pCreat("some text")

//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulCreat = (li) => {
    document.write(`<ul>`)
    document.write(`<li>${li}</li>`)
    document.write(`<li>${li}</li>`)
    document.write(`<li>${li}</li>`)
    document.write(`</ul>`)
}
ulCreat("item")

//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let liCreat = (txt, li) => {
    document.write(`<ul>`)
    for (let i = 0; i<li; i++ ){
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}
liCreat('icon',5)

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let olCreat = (arr) => {
    document.write(`<ol>`)
    for (i of arr){
        document.write(`<li>${i}</li>`)
    }
    document.write(`</ol>`)
}
olCreat(arr1)

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrObj = (arr) => {
    for (iter of arr){
        document.write(`<div class="row"> `)
        for (i in iter){
            document.write(`<div>`)
            document.write(`${i}: ${iter[i]}`,`,`)
            document.write(`</div>`)
        }
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
        id:3, name:"Sarah", age:20
    }
];
arrObj(ob)