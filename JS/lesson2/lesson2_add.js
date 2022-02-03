//Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//  кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//  Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length>=3){
    console.log("This is large array");
} else {
    console.log("This is small array");
}

// Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let aA = 5;
let bB = 6;
let cC = 14;
if (aA>bB && aA<cC){
    console.log(aA);
    console.log("This is middle number");
} else if (bB>aA && bB<cC){
    console.log(bB);
    console.log("This is middle number");
} else {
    console.log(cC)
    console.log("This is middle number");
}

//Перепишіть конструкцію if з використанням умовного оператора '?':
//  let result;
//  if (a + b < 4) {
//     result = 'Мало';
//  } else {
//     result = 'Багато';
//  }
let a1 = Math.random()*9;
let b2 = Math.random()*9;
let a = Math.round(a1);
let b = Math.round(b2);
let result = (a+b<4) ? "мало" : "багато";
console.log(a);
console.log(b)
console.log(result);

//Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let num = Math.random()*200-100
let numb = Math.round(num)
console.log(numb)
let res = (numb===0) ? "You have zero" :
    (numb<0) ? "Negative number" : "Positive number";
console.log(res);