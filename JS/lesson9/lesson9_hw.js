//Все робити за допомоги js.
// - створити блок,
let div1 = document.createElement('div');

// додати йому класи wrap, collapse, alpha, beta
div1.classList.add('wrap');
div1.classList.add('collapse');
div1.classList.add('alpha');
div1.classList.add('beta');

//додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div1.style.background = 'yellow';
div1.style.color = 'blue';
div1.style.fontSize = '20px';
div1.innerText = 'div1'

//додати цей блок в body.
document.body.appendChild(div1)

//клонувати його повністю, та додати клон в body.
let div1Clone = div1.cloneNode(true);
document.body.appendChild(div1Clone)
div1Clone.innerText = 'div1Clone'

//Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arr1 = ['Main','Products','About us','Contacts'];
for (let string of arr1) {
    let liString = document.createElement('li');
    let arr1Ul = document.getElementsByClassName('menu')[0];
    arr1Ul.appendChild(liString);
    liString.innerText = string;
}

//Є масив
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let element of coursesAndDurationArray) {
    let divElem = document.createElement('div');
    document.body.appendChild(divElem);
    divElem.innerText = `${element.title}, ${element.monthDuration}`;
    divElem.style.padding = '5px'
}

//Є масив
//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (let elem of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.classList.add('item');
    document.body.appendChild(divElement)
    let h1Elem = document.createElement('h1');
    h1Elem.classList.add('heading');
    let pElem = document.createElement('p');
    pElem.classList.add('description')
    divElement.appendChild(h1Elem);
    divElement.appendChild(pElem)
    h1Elem.innerText = `${elem.title}`;
    pElem.innerText = `${elem.monthDuration}`
}
