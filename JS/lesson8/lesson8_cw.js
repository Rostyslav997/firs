//1) Напишіть код, який :
//     a) додає клас з назвою групи, елементу з ід main_header
let idMainHeader = document.getElementById('main_header');
idMainHeader.classList.add('name_group');
console.log(idMainHeader);

//робить шириниу елементу ul 400px
let allUl = document.getElementsByTagName('ul');
for (i of allUl){
    i.style.width = '400px';
};

// робить шириниу всіх елементів з класом linkList шириною 50%
let classLinkList = document.getElementsByClassName('linkList');
for (i of classLinkList){
    i.style.width = '50%';
};

//отримує текст який зберігається в елементі з класом listElement2
let classListElement2 = document.getElementsByClassName('listElement2');
for (i of classListElement2){
    console.log(i.innerText);
};

//отримує всі елементи li та змінює ім колір фону на сірий
let allLi = document.getElementsByTagName('li');
for (i of allLi){
    i.style.background = 'blue';
};

//отримує всі елементи 'a' та додає їм клас anchor
let allA = document.getElementsByTagName('a');
for (i of allA){
    i.classList.add('anchor');
};
console.log(allA);

//отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (i of allA){
    if (i.innerText==='link3'){
        i.style.fontSize = '40px'
    };
};

//отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (i of allA){
    let inntertext = i.innerText;
    let xxx = 'element_'+inntertext;
    i.classList.add(xxx);
    console.log(i);
};

//отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let colorSubHeader = prompt('Color of background')
let subHeader = document.getElementsByClassName('sub-header');
for (i of subHeader){
    i.style.background = colorSubHeader;
};

//отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let colorContent2 = prompt('Color of text in content 2 segment')
for (i of subHeader){
    if (i.innerText === 'content 2 segment'){
        i.style.color = colorContent2
    }
};

//отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let textContent1 = prompt('Free text for content 1');
let content1 = document.getElementsByClassName('content_1');
for (i of content1){
    let content1child = i.children
    for (i of content1child){
        if (textContent1.length >= 1){ //якщо в prompt нічого не введено, текст залишається старий
            i.innerText = textContent1;
        }
    }
};

// отримати елементи p та змінити їм padding на 20px
let allP = document.getElementsByTagName('p');
for (i of allP){
    i.style.padding = '20px';
};

//отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let classText2 = document.getElementsByClassName('text2');
for (i of classText2){
    i.innerText = 'dec-2021';
}

