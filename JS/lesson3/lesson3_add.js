//Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
let arr = [];
for (i=0; i<100; i++){
    arr[i] = i;
    if (i%2===0){
        console.log(arr[i])
    }
}
//заповнити його 50 непарними числами за допомоги циклу.
for (i=0; i<100; i++){
    arr[i] = i;
    if (i%2!==0){
        console.log(arr[i])
    }
}

//Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (i=0; i<20; i++){
    arr[i] = Math.round(Math.random()*9)
    console.log('рандомне число',arr[i])
}

//Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (i=0; i<20; i++){
    arr[i] = Math.round(Math.random()*724+8)
    console.log('рандомне число в діапазоні (8-723)',arr[i])
}

//Вивести за допомогою console.log кожен третій елемен
for (i=0; i<20; i=i+3){
    arr[i] = Math.round(Math.random()*724+8)
    console.log('кожен третій елемент',arr[i])
}

//Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (i=0; i<20; i=i+3){
    arr[i] = Math.round(Math.random()*724+8)
    if (arr[i]%2===0){
        console.log('кожен третій парний елемент',arr[i])
    }
}

//Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newarr = []
for (i=0; i<20; i=i+3){
    arr[i] = Math.round(Math.random()*724+8)
    if (arr[i]%2===0){
        newarr = arr
        console.log('кожен третій парний елемент','новий масив',newarr[i])
    }
}

//Вивести кожен елемент масиву, сусід справа якого є парним
let arr2 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i]%2===0){
        console.log(`${arr2[i-1]} `)
    }
}

//Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let check = [100,250,50,168,120,345,188];
let suma = check.reduce(function(a, b) {
    return a + b;
});
let result = Math.round(suma/check.length)
console.log('Середній чек',result)

//Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
for (i=0; i<10; i++){
    arr[i] = Math.round(Math.random()*10+1)
    let pmn = [];
    pmn = arr[i]*5
    console.log(pmn)
}

//Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr3 = [11,3,5,'yes','no', true, false];
let newarr3 = [];
for (let i = 0; i < arr3.length; i++) {
    newarr3 = arr3[i]
    if (typeof newarr3==="number"){
        console.log(newarr3)
    }
}

//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr4 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67, 87 ]
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i]%2===0){
        console.log(`${arr4[i]} `)
    }
}

//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr5 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67, 87 ];
let newarr5 = [];
for (let i = 0; i < arr5.length; i++) {
    newarr5 = arr5[i];
    console.log(newarr5)
}

/*За допомогою циклу вивести всю інформацію про користувачів використовуючи шаблон Template 1.1
			* за допомоги стилів, побудувати сітку по 2 об'єкта в лінію
			*
			* */
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

document.write(`<div class="users-box">`)
for (const usersListElement of usersList) {
    document.write(`<div class="user-block">
<h2>ID: ${usersListElement.id} NAME: ${usersListElement.name} USERNAME: ${usersListElement.username}</h2>
<h3>EMAIL: ${usersListElement.email} PHONE: ${usersListElement.phone}</h3>
<div class="adress-block">
  <p>City: ${usersListElement.address.city}</p>
  <p>Street: ${usersListElement.address.street}</p>
  <p>Suite: ${usersListElement.address.suite}</p>
  <p>Zip code: ${usersListElement.address.zipcode}</p>
</div>
</div>`)
}
document.write(`</div>`)

