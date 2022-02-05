//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let mass = [1,2,3,4,5,'one','two','three','four','five',5===5,4>5,4<5,3===1,4>=2]
console.log(mass)

//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let mass2 = [];
mass2[0] = 25;
mass2[1] = 'twenty five';
mass2[2] = true
console.log(mass2)

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i=0; i<11; i++){
    document.write(`<div>this is some text</div>`)
}

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i=0; i<11; i++){
    document.write(`<div>this is some text ${i}</div>`)
}
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i<21){
    document.write(`<h1>free</h1>`);
    i++;
}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let ii = 0;
while (ii<21){
    document.write(`<h1>free ${ii}</h1>`);
    ii++;
}

//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let mass3 = [1,4,6,7,8,9,23,65,22,11];
for (i of mass3){
    console.log(i)
}

//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let mass4 = ['one','two','three','four','five','six','seven','eight','nine','ten',]
for (i of mass4){
    console.log(i)
}

//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mass5 = [1,2,3,4,5,'one','two','three','four','five',]
for (i of mass5){
    console.log(i)
}

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mass6 = [1,2,3,'hi','hello','bye', true,false, 5===5,6>8,]
for (i of mass6){
    if (typeof i==="boolean"){
        console.log(i)
    }
}

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (i of mass6){
    if (typeof i==="number"){
        console.log(i)
    }
}

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (i of mass6){
    if (typeof i==="string"){
        console.log(i)
    }
}

//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let mass7 = [];
mass7[0] = 0; mass7[1] = 1; mass7[2] = 2; mass7[3] = 3;
mass7[4] = 'four'; mass7[5] = 'five'; mass7[6] = 'six';
mass7[7] = true; mass7[8] = false; mass7[9] = 5<6;
for (i of mass7){
    console.log(i)
}

//творити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i<10; i++){
    document.write('крок',' ',i,' ',"<br/>");
    console.log('крок',i)
}

//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i<100; i++){
    document.write('крок',' ',i,' ',"<br/>");
    console.log('крок',i)
}

//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i<100; i=i+2){
    document.write('кожен другий крок',' ',i,' ',"<br/>");
    console.log('кожен другий крок',i)
}

//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i<100; i++){
    if (i%2===0){
        document.write('парний крок',' ',i,' ',"<br/>");
        console.log('парний крок',i)
    }
}

//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i<100; i++){
    if (i%2===1){
        document.write('непарний крок',' ',i,' ',"<br/>");
        console.log('непарний крок',i)
    }
}


