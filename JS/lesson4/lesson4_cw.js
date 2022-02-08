//створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumb(a,b,c){
    if (a<=b && a<=c){
        console.log(a);
    } else if (b<=a && b<=c){
        console.log(b);
    } else if (c<=a && c<=b) {
        console.log(c);
    }
}
minNumb(1,10,4)

//створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumb(a,b,c){
    if (a>=b && a>=c){
        console.log(a)
    } else if (b>=a && b>=c){
        console.log(b);
    } else if (c>=a && c>=b){
        console.log(c)
    }
}
maxNumb(2,4,3)

// створити функцію яка повертає найбільше число з масиву
function arrMax(arr){
    let max = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i]>max){
            max = arr[i];
        }
    } return max
}
let arr = [2,10,156,1]
console.log(arrMax(arr))

//створити функцію яка повертає найменьше число з масиву
function arrMin(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<min){
            min = arr[i];
        }
    } return min
}
console.log(arrMin(arr))

//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function arrSum(arr){
    let res = 0;
    for (i of arr){
        res = res + i;
    }
    return res;
}
console.log('сума елементів',arrSum(arr))

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrAver(arr) {
    let res = 0;
    for (i of arr){
        res = res + i;
    }
    let average = res/arr.length
    return average
}
console.log('середнє арифметичне',arrAver(arr))

//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function anyNumb(){
    let max = arguments[0];
    let min = arguments[0];
    for (i of arguments){
        if (i>max){
            max=i;
        }
        if (i<min){
            min=i;
        }
    } console.log('max',max)
    return min;
}

//створити функцію яка заповнює масив рандомними числами
function arrFillRand(arrLength) {
    let array = [];
    for (let i = 0; i < arrLength; i++) {
        array.push(Math.round(Math.random()*9));
    }
    return array
}
console.log(arrFillRand(10))

//створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function fillRand(length,limit){
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random()*limit))
    }
    return arr;
}
console.log(fillRand(10,22))

//Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function arrRevers(arr) {
    let arrRev = []
    for (let i = arr.length - 1; i >= 0; i--) {
        arrRev.push(arr[i])
    }
    return arrRev
}
let mas = [1,2,3]
console.log(arrRevers(mas))
