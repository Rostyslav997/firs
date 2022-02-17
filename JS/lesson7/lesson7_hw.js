//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let user1 = new User(1,'Albert','Einsteint','albert@gmail.com',80674323651);
let user2 = new User(2,'Marie','Curie','marie@gmail.com',80976519062);
let user3 = new User(3,'Isaac','Newton','isaac@gmail.com',80981203349);
let user4 = new User(4,'Charles','Darwin','charles@gmail.com',80631199782);
let user5 = new User(5,'Nikola','Tesla','nikola@gmail.com',80934598141);
let user6 = new User(6,'Galileo','Galilei','galileo@gmail.com',806677850);
let user7 = new User(7,'Ada','Lovelave','ada@mail.com',80996754368);
let user8 = new User(8,'Carl','Linnaeus','carl@mail.com',80932198401);
let user9 = new User(9,'Rosalind','Franklin','rosalind@mail.com',80679955022);
let user10 = new User(10,'John','Muir','john@mail.com',80932741980);
let userArr = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(userArr.filter(elem => {
    return elem.id % 2 === 0
}));

//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по спаданню (sort)
console.log(userArr.sort((a, b) => {
    return b.id - a.id
}));

//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}
let client1 = new Client(1,'Elon','Mask','elon@mail.com',4215478,['tesla','spacex']);
let client2 = new Client(2,'Bernard','Arnault','bernard@mail.com',5462890,['t-shirt','shoes','hats'])
let client3 = new Client(3,'Jeff','Bezos','jess@gmail.com',7874422,['book','modem','phone'])
let client4 = new Client(4,'Bill','Gates','bill@mail.com',5431278,['phone','headphones']);
let client5 = new Client(5,'Warren','Buffet','warren@mail.com',2315465,['battery'])
let client6 = new Client(6,'Larry','Page','larry@mail.com',5433420,['car','house','table','laptop','screen'])
let client7 = new Client(7,'Larry','Ellison','larry@gmail.com',2113278,['wheels','appartment'])
let client8 = new Client(8,'Sergey','Brin','sergey@mail.com',8895487,['food','water'])
let client9 = new Client(9,'Mark','Zuckerberg','mark@gmail.com',4448810,['blouse','pants','sneakers'])
let client10 = new Client(10,'Steave','Ballmer','steave@mail.com',9023292,['soft'])
let clientArr = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];

//Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientArr.sort((a, b) => {
    return a.order.length - b.order.length
}));