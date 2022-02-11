// Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let hello = 'hello world';
let lorem = 'lorem ipsum';
let java = 'javascript is cool';
console.log(hello.length);
console.log(lorem.length);
console.log(java.length);

// Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(hello.toUpperCase());
console.log(lorem.toUpperCase());
console.log(java.toUpperCase());

//Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(hello.toLowerCase());
console.log(lorem.toLowerCase());
console.log(java.toLowerCase());

//Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str2 = 'Каждый охотник желает знать';
let strToArray = (str) => str.split(' ');
console.log(strToArray(str2));

//апишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let delete_characters = (str,length) => str.slice(0,length);
console.log(delete_characters(str2, 7));

//Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let str3 = "HTML JavaScript PHP";
let insert_dash = (str) => str.replaceAll(' ','-').toUpperCase();
console.log(insert_dash(str3));

//Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let substr = (str) => str.charAt(0).toUpperCase()+str.substr(1);
console.log(substr(java));

//Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => str.split(' ').map(element => element.substr(0,1).toUpperCase()+element.substr(1)).join(' ');
console.log(capitalize(str2));



