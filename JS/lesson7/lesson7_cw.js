//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarCreator(model, producer, year, maxspeed, engine){
    let car = {
        model: model,
        producer: producer,
        year: year,
        maxspeed: maxspeed,
        engine: engine
    }
    return {
        drive: () => `їдемо зі швидкістю ${car.maxspeed} км на годину`,
        info: () => car,
        increaseMaxSpeed: (newSpeed) => newSpeed+maxspeed,
        changeYear: (newValue) => year = newValue,
        addDriver: (driver) => car.driver = driver
    }

}
let ford = CarCreator('ford','focus',2013,250,2);
console.log(ford.drive());
console.log(ford.info());
console.log(ford.increaseMaxSpeed(70));
console.log(ford.changeYear(2015));
ford.addDriver('Ken Block');

//(Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarCreat {
    constructor(model, producer, year, maxspeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engine = engine;
    }
    drive () {
       return `їдемо зі швидкістю ${this.maxspeed} км на год`
    }
    info () {
        for (let key in this){
            console.log(`${key}: ${this[key]}`)
        }
    }
    increaseMaxSpeed (newSpeed) {
        return newSpeed+this.maxspeed;
    }
    changeYear (newValue){
        return this.year = newValue;
    }
    addDriver (driver){
        return this.driver = driver;
    }
}
let vw = new CarCreat('golf','vw',2015,220,1.8);
console.log(vw.drive());
vw.info();
console.log(vw.increaseMaxSpeed(30));
console.log(vw.changeYear(2016));
vw.addDriver('Sebastien Ogier')

//створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cind {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cindArr = [
    new Cind('Olivia',19,34),
    new Cind('Emma',22,37),
    new Cind('Ava',21,36),
    new Cind('Charlotte',18,35),
    new Cind('Sophia',23,33),
    new Cind('Amelia',22,32),
    new Cind('Isabella',23,38),
    new Cind('Mia',26,39),
    new Cind('Lisa',23,40),
    new Cind('Lois',29,41)
];
console.log(cindArr)
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, findSize) {
        this.name = name;
        this.age = age;
        this.findSize = findSize;
    }
}
let prince1 = new Prince('Carl',24,36)
console.log(prince1);

//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (i of cindArr){
    if (i.footSize === prince1.findSize){
        console.log(`Finally ${i.name} meet ${prince1.name}`)
    }
}

//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cindArr.find(cind => cind.footSize === prince1.findSize));
