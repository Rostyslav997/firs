//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
let mass = [2,17,13,6,22,31,45,66,100,-18];
let i1=0;
while (i1<mass.length){
    console.log(mass[i1])
    i1++;
}

//2. перебрати його циклом for
for (i of mass){
    console.log(i)
}

//перебрати циклом while та вивести  числа тільки з непарним індексом
let i2 = 0;
while (i2<mass.length){
    if (i2%2===1){
        console.log('непарне число',mass[i2])
    }
    i2++;
}

//перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i=0; i<mass.length; i++){
    if (i%2===1){
        console.log('непарне число',mass[i])
    }
}

//перебрати циклом while та вивести  числа тільки парні  значення
let i3 = 0;
while (i3<mass.length){
    if (i3%2===0){
        console.log('парне число',mass[i3])
    }
    i3++;
}

//перебрати циклом for та вивести  числа тільки парні  значення
for (let i=0; i<mass.length; i++){
    if (i%2===0){
        console.log('парне число',mass[i])
    }
}

//замінити кожне число кратне 3 на слово "okten"
let mass2 = [2,17,13,6,22,31,45,66,100,-18];
for (let i=0; i<mass2.length; i++){
    if (i%3===0){
        mass2[i]='okten';
        console.log('число кратне 3',mass2[i])
    }
}

//вивести масив в зворотньому порядку.
for (let i = mass.length - 1; i >= 0; i--) {
    let mass1 = mass[i];
    console.log(mass1)
}

//всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let mass3 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = mass3.length -1; i>=0; i--){
    if (i%3===0){
        mass3[i]='okten';
        console.log('число кратне 3 (у зворотньому порядку)',mass3[i])
    }
}

////перебрати циклом for та вивести  числа тільки парні  значення (задом наперед)
 for (let i = mass.length -1; i>=0; i--){
     if (i%2===0){
         console.log('парне число (у зворотньому порядку)',mass[i])
     }
 }

 //перебрати циклом while та вивести  числа тільки парні  значення (задом наперед)
let i4 = mass.length-1;
while (i4>=0){
    if (i4%2===0){
        console.log('парне число (у зворотньому порядку)',mass[i4])
    }
    i4--;
}

//перебрати циклом for та вивести  числа тільки з непарним індексом (задом наперед)
for (let i = mass.length -1; i>=0; i--){
    if (i%2===1){
        console.log('непарне число (у зворотньому порядку)',mass[i])
    }
}

//перебрати циклом while та вивести  числа тільки з непарним індексом (задом наперед)
let i5 = mass.length-1;
while (i5>=0){
    if (i5%2===1){
        console.log('непарне число (у зворотньому порядку)',mass[i5])
    }
    i5--;
}

//1. перебрати його циклом while (задом наперед)
let i6 = mass.length-1;
while (i6>=0){
    console.log(mass[i6])
    i6--;
}

//Використовуючи данні з масиву, за допомоги document.write та циклу
//             побудувати структуру по шаблону template1.1
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>')
    for (listOfItem of listOfItems){
        document.write(`<li>${listOfItem}</li>`)
    }
document.write('</ul>')

//Використовуючи данні з масиву, за допомоги document.write та циклу
// 			побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
// 			Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
// 		    Шаблон застосувати до кожного об'єкта в масиві

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
]
document.write('<div class="simp">')
for (simp of simpsons){
    document.write(`<div class="simps">
<div class="NAME">NAME- ${simp.name}</div> <div class="SURNAME">SURNAME- ${simp.surname}</div> <div class="AGE">AGE- ${simp.age}</div> 
<div>INFO- ${simp.info}</div> <img class="image" src="${simp.photo}" alt="simpsons">
</div>`)
}
document.write('</div>')


document.write('<div class="simp">')
for (simp of simpsons){
    document.write(`<div>
<h2>NAME ${simp.name}, SURNAME ${simp.surname}, AGE ${simp.age}</h2>
<p>INFO ${simp.info}</p>
<img class="image" src="${simp.photo}" alt="simpsons">
`)
}
document.write('</div>')

//Використовуючи данні з масиву, за допомоги document.write та циклу
//             побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
//             Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write('<div class="product">')
for (let product of products) {
    document.write(`<div>
<h3>TITLE ${product.title}, PRICE ${product.price}</h3>
<div class="pic"><img class="photo" src="${product.image}" alt="product-image"></div>
</div>`)

}
document.write('</div>')