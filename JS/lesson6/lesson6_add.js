// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
let cutSting = (str,n) => {
    let arr = [];
    for (i = 0; i<str.length; i=i+n){
        arr.push(str.substr(i,n))
    }
    return arr.join(' ')
};
let st = "Random string";
console.log(cutSting(st, 3));

//Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//Протестувати на значеннях
let em1 ='someemai@gmail.com'
let em2 = 'someeMAIL@gmail.com'
let em3 = 'someMAIL@i.ua'
let em4 = 'some.email@gmail.com'
let valid = (str) => {
    str.toLowerCase();
    let g = str.split('@');
    let n = str.indexOf("@");
    let s = str.lastIndexOf('.');
    let incl = str.includes('@');
    if (g[0].length>0 && incl===true && s>n+2){
        console.log(true);
    } else {
        console.log(false);
    }
};
valid(em3)

//
