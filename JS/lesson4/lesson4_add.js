//створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function arrIf() {
    let res = 0;
    for (i of arguments) {
        if (arguments.length === 1) {
            console.log(i)
        } else if (arguments.length>1){
            res=res+i;
        }
    }return res
}
console.log(arrIf(2,8))

//Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
function objKey(obj) {
    let keys = []
    for (i of obj){
        for (let objKey1 in i) {
            keys.push(objKey1)
        }
    } console.log(keys)
}
let arr= [{name: 'Dima', age: 13}, {model: 'Camry'}]
objKey(arr)

//Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
function arrObj(obj){
    let keys = [];
    for (let i of obj){
        for (let i2 in i){
            keys.push(i[i2])
        }
    }console.log(keys)
}
arrObj(arr)


