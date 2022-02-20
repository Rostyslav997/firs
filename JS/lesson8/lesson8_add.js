//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let nameClassArr = [];
let nameClass = function (elem){
    let childdren = elem.children;
    for (child of childdren){
        if (child.className.length>0){ //якщо у елемента немає класу, щоб його не виводило як порожню строку
            nameClassArr.push(child.className)
        }
        nameClass(child)
    }
}
nameClass(document.body);
console.log(nameClassArr);

