//Дано натуральное число n. Выведите все числа от 1 до n.
let narutal = (first,n) => {
    console.log(first);
    first++;
    if (first>n){
        return;
    } else {
        narutal(first,n);
    }
}
narutal(1,10)

//Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let ab = (a,b) => {
    if (a<=b){
        console.log(a);
        a++;
        if (a<=b){
            ab(a,b);
        }
    } else if (a>=b){
        console.log(a);
        a--;
        if (a>=b){
            ab(a,b);
        }
    }
}
ab(20,10)

//функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let chng = (arr,i) => {
    for (let iter = 0; iter<arr.length; iter++) {
        if (iter===i){
            let a = arr[iter];
            arr[iter] = arr[iter+1];
            arr[iter+1] = a;
        }
    } console.log(arr)
}

let arr = [9,8,0,4];
chng(arr,0);

//Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
let zeroEnd = (arr) => {
    let down = arr.length
    for (let iter = 0; iter<down; iter++){
        if (arr[iter]===0){
            arr.push(arr[iter]);
            arr.splice(iter,1);
            down--;
            iter--;
        }
    } console.log(arr)
}
let arr1 = [1,0,6,0,3];
zeroEnd(arr1)


let zero = (arr) => {
    let zeroArr=[];
    let otherArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0){
            zeroArr.push(arr[i]);
        } else {
            otherArr.push(arr[i]);
        }
    } let newArr = otherArr.concat(zeroArr);
    console.log(newArr);
}
let arr2 = [3,0,4,5,0,9,5]
zero(arr2);

let newZero = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i]===0){
            count = count + 1;
            arr.splice(i,1);
        }
    } for (let i = 0; i<count; i++){
        arr.push(0);
    }
    console.log(arr);
}
let arr3 = [3,0,4,5,0,9,5];
newZero(arr3);