const myUpperCase = (doh) => {
    console.log(typeof doh.toUpperCase);
    console.log(doh.toUpperCase());
}
myUpperCase("Джали");

//.....

const myLowerCase = (doh) => {
    console.log(typeof doh.toLowerCase);
    console.log(doh.toLowerCase());
}
myLowerCase("DDDsssaaDD")

//  В следующем примере демонстрируются некоторые методы, имеющиеся у массивов:

const arrayFunctions = () => {
    var mack = [];
    mack.push("trest,");
    mack.push("kotoriy","lopnul");
    console.log(mack);
    console.log(mack.join(" "));
    console.log(mack.pop());
    console.log(mack);
}

arrayFunctions();


// Один из способов создать объект – использовать фигурные скобки:
var day1 = {
    squirrel: false,
    events: ["rabota","tronul derevo","picca","probejka"],
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

// Оператор delete отрезает щупальце. Это унарный оператор, 
//применяемый к выражению доступа к свойству.
var anObject = {left: 1,right: 2};
console.log(anObject.left);

delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);


// Получается, что массивы – это разновидность объектов, которые специализируются на хранении последовательностей. 
var journal = [
    {events: ["работа","тронул дерево","пицца","пробежка"],
     squirrel: false},
    {events: ["работа","тронул дерево","пицца","пробежка"],
     squirrel: false},
    {events:["выходной", "велик", "перерыв", "арахис", "пивасик"],
     squirrel:true}
];

//ве ссылки на один объект или же у нас есть два разных объекта, содержащих одинаковые свойства.

var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

 console.log(object1 == object2);
 
// unshift shift push pop




