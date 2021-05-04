/*
Array is kind of list


*/
const Mon = "Nicoloas";
const Tur = "55";
const wed = true;
const thu = "Seoul";
const Fri = "Fri";
const sat = "Sat";

const NifoInfo = [];
NifoInfo.push(Mon);
NifoInfo.push(Tur);
NifoInfo.push(wed);
NifoInfo
console.log(NifoInfo);
console.log(NifoInfo[2]);
console.log(NifoInfo.sort());

const nicoInfo2 = {
    name:"nico",
    age:"40",
    gender:"Male",
    inHandsome:true,
    favMovies:["HarryPorter", "Thor", "Avengers"],
    favFood:[{name:"iceCream",fatty:true},{name:"salad", fatty:false}]

};
//{}는 오브젝트, [] 는 배열

function sayHello(name, age) {
    return console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("seoyeon", 27);

const greeNicolas = sayHello("Nicolas", 30);
console.log(greeNicolas);

const calculator = {
 plus: function(a,b) {
     return a + b;
 },
 minus: function(a,b){
     return a-b;
 }

}

const plus = calculator.plus(5,5);
console.log(plus);