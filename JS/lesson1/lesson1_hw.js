//Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
let owu = 'owu'
let hello = 'hello'
let com = 'com'
let ua = 'ua'
let one = 1
let ten = 10
let nine = -999
let one123 = 123
let pi = 3.14
let two7 = 2.17
let sixteen = 16
let true1 = 5>4
let false1 = 5>6
console.log(owu,hello,com,ua,one,ten,nine,one123,pi,two7,sixteen,true1,false1)
//alert(owu)
//alert(hello)
//alert(com)
//alert(ua)
//alert(one)
//alert(ten)
//alert(nine)
//alert(one123)
//alert(pi)
//alert(two7)
//alert(sixteen)
//alert(true1)
//alert(false1)
document.write(owu,` `,hello,` `,com,` `,ua,` `,one,` `,ten,` `,nine,` `,one123,` `,pi,` `,two7,` `,sixteen,` `,true1,` `,false1,` `)

//Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
owu = 'okten'
hello = 'hi'
com = 'dot'
ua = 'Ukraine'
one = 1.0
ten = 'ten'
nine = 999
one123 = 123
pi = 3.1415
two7 = 27
sixteen = 'sixteen'
true1 = 6>4
false1 = 4>6
console.log(owu,hello,com,ua,one,ten,nine,one123,pi,two7,sixteen,true1,false1)
//alert(owu)
//alert(hello)
//alert(com)
//alert(ua)
//alert(one)
//alert(ten)
//alert(nine)
//alert(one123)
//alert(pi)
//alert(two7)
//alert(sixteen)
//alert(true1)
//alert(false1)
document.write(owu,` `,hello,` `,com,` `,ua,` `,one,` `,ten,` `,nine,` `,one123,` `,pi,` `,two7,` `,sixteen,` `,true1,` `,false1,` `)

//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firsName = 'Rostyslav '
let middleName = 'Vasylovuch '
let lastName = 'Sobkiv '
let person = firsName+middleName+lastName
console.log(person)

//За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//let age = prompt('Your age')
//let firstName = prompt('Your fist Name')
//let lastName = prompt('Your last Name')
//console.log('Hello',firstName,lastName,'Your age is', age )

//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100
let b = '100'
let c = true
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

//Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true
let q = 5<6
console.log(q)
q = 5>6
console.log(q)
q = 5==6
console.log(q)
q = 5>=6
console.log(q)

let w = 10==10
console.log(w)
w = 10>=10
console.log(w)
w = 10<10
console.log(w)
w = 10!==10
console.log(w)
w = 10>10
console.log(w)

one123 = 123>'123'
console.log(one123)
one123 = 123=='123'
console.log(one123)

//Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a1 = 5;
document.write(str + a1 + "<br/>"); //Тому що, тут число 5, додається до стрічкового значення 20
document.write(str - a1 + "<br/>")//Тому що, при відніманні, число 5, віднімається від стрічкового значення числа 20
document.write(str * "2" + "<br/>")//Тому що, значення 20, примножується на значення 2
document.write(str / 2 + "<br/>")//Тому що, значення 20, ділиться на 2