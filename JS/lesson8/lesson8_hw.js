// Напишіть код,  котрий :
//     -- отримує текст з параграфа з id "content"
let idContent = document.getElementById('content')
console.log(idContent.innerText);

//отримує текст з блоку з id "rules"
console.log(document.getElementById('rules').innerText);

//замініть текст параграфа з id 'content' на будь-який інший
idContent.innerText = 'Some text for example';
console.log(idContent.innerText);

//замініть текст параграфа з id 'rules' на будь-який інший
console.log(document.getElementById('rules').innerText = 'Another text that I change');

//змініть кожному елементу колір фону на червоний
let allElem = document.body.children;
for (i of allElem){
    i.style.background = 'red';
};

//змініть кожному елементу колір тексту на синій
for (i of allElem){
    i.style.color = 'blue';
};

//отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);

//поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules = document.getElementsByClassName('fc_rules');
for (i of fcRules){
    i.style.color = 'red'
};
