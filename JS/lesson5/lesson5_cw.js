//створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min = (a,b,c) =>{
    if (a<=b && a<=c){
        console.log(a);
    } else if (b<=a && b<=c){
        console.log(b);
    } else if (c<=a && c<=b){
        console.log(c);
    }
}
min(2,3,1)

//створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a,b,c) => {
    if (a>=b && a>=c){
        console.log(a);
    } else if (b>=a && b>=c){
        console.log(b);
    } else if (c>=a && c>=b){
        console.log(c);
    }
}
max(3,7,5)

//створити функцію яка повертає найбільше число з масиву
let maxArr = (arr) => {
    let max = arr[0];
    for (i of arr){
        if (i>max){
            max = i;
        }
    } return max;
}
let arr = [11,4,7,27,252,78];
console.log(maxArr(arr))

//створити функцію яка повертає найменьше число з масиву
let minArr = (arr) => {
    let min = arr[0];
    for (i of arr){
        if (i<min){
            min=i;
        }
    } return min;
}
console.log(minArr(arr))

//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його
let sumArr = (arr) => {
    let res = 0;
    for (i of arr){
        res = res + i;
    } return res;
}
console.log(sumArr(arr))

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень
let averArr = (arr) => {
    let aver = 0;
    let res = 0;
    for (i of arr){
        res = res + i;
        aver = res/arr.length;
    } return Math.round(aver);
}
console.log(averArr(arr))

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let maxminArr = (...arr) => {
    let min = arr[0];
    let max = arr[0];
    for (i of arr){
        if (i<min){
            min = i;
        }
        else if (i>max){
            max = i;
        }
    }
    console.log(max);
    return min;
}

//створити функцію яка заповнює масив рандомними числами
let randArr = (length) => {
    let random = [];
    for (let i=0; i<length; i++){
       random.push(Math.round(Math.random()*100));
    } return random
}
console.log(randArr(5))

//створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randLimit = (length,limit) => {
    let rand = [];
    for (let i = 0; i<length; i++){
        rand.push(Math.round(Math.random()*limit))
    } return rand;
}
console.log(randLimit(8,100))

//Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reversArr = (arr) => {
    let newarr = [];
    for (let i = arr.length-1; i>=0; i--){
        newarr.push(arr[i]);
    } return newarr;
}
let arr1 = [1,3,5,7]
console.log(reversArr(arr1))