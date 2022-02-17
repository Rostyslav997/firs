//Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
class Const {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}
class Address{
 constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}
class Company {
 constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}
class Geo {
 constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
let geo = new Geo('-37.3159','81.1496');
let company = new Company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
let address = new Address('Kulas Light','Apt. 556','Gwenborough','92998-3874',geo);
let exmpl = new Const(1,'Leanne Graham','Bret','Sincere@april.biz',address,'1-770-736-8031 x56442','hildegard.org',company)
console.log(exmpl);

//Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1

class Tag {
    constructor(title, action, attributes) {
        this.title = title;
        this.action = action;
        this.attributes = attributes;
    }
}
class Attributes {
    constructor(titleofAttr, actionofAttr) {
        this.titleofAttr = titleofAttr;
        this.actionofAttr = actionofAttr;
    }
}
let accesskey = new Attributes('accesskey','Активация ссылки с помощью комбинации клавиш.')
let coords = new Attributes('coords','Устанавливает координаты активной области.')
let tagA = new Tag('area','Предназначен для создания ссылок',[accesskey,coords]);
console.log(tagA);

let align = new Attributes('align','Задает выравнивание содержимого тега div')
let title = new Attributes('title','Добавляет всплывающую подсказку к содержимому.')
let tagDiv = new Tag('div','Предназначен для выделения фрагмента документа с целью изменения вида содержимого.',[align,title])
console.log(tagDiv);

let alignh1 = new Attributes('align','Определяет выравнивание заголовка.')
let hidden = new Attributes('hidden','Скрывает содержимое элемента от просмотра.')
let tagh1 = new Tag('h1','Представляет собой наиболее важный заголовок первого уровня',[alignh1,hidden]);
console.log(tagh1);


