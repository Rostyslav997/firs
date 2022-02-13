// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
let cutSting = (str,n) => {
    let arr = [];
    for (let i = 0; i<str.length; i=i+n){
        arr.push(str.substr(i,n))
    }
    return arr.join(' ')
};
let st = "Random string";
console.log(cutSting(st, 3));

//Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//Протестувати на значеннях
let em1 ='someemai@gmail.com'
let em2 = 'someeMAIL@gmail.com'
let em3 = 'someMAIL@i.ua'
let em4 = 'some.email@gmail.com'
let valid = (str) => {
    let low = str.toLowerCase();
    let split = low.split('@').splice(0,1).join(' ');
    let have = split.includes('a','b','c','d','e','f','g','h',
        'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w',
        'x','y','z')
    let indxs = low.indexOf("@");
    let lastIndexOf = low.lastIndexOf('.');
    let incl = low.includes('@');
    if (have===true && incl===true && lastIndexOf>indxs+2){
        console.log(true);
    } else {
        console.log(false);
    }
};
valid(em2)

//є масив, відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.sort((a, b) => {
    return b.modules.length - a.modules.length;
}));

//Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let count = (str,stringsearch) => {
    let counter = 0;
    for (let i = 0; i<str.length; i++){
        if (str[i].includes(stringsearch)){
            counter = counter + 1;
        }
    } return counter;
}
let someStr = 'Random string for example';
console.log(count(someStr, 'o'));

//Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let cutString = (str,n) => {
    let split = str.split(' ');
    split.splice(n)
    return split.join(' ')
};
console.log(cutString(someStr, 2));
