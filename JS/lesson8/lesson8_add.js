//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let nameClassArr = [];
let nameClass = function (elem){
    let childdren = elem.children;
    for (child of childdren){
        for (list of child.classList){
            if (nameClassArr.includes(list)===false){
                nameClassArr.push(list);
            }
        }
        nameClass(child)
    }
}
nameClass(document.body);
console.log(nameClassArr);


//
let nameClassArr2 = [];
let nameClass2 = function (elem){
    let childdren = elem.children;
    for (child of childdren){
        for (list of child.classList){
            nameClassArr2.push(list);
        }
        nameClass2(child)
    }
}
nameClass2(document.body);
console.log(nameClassArr2);
