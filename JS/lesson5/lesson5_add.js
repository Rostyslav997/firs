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
    return;
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
debugger
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
