//call back fn is asynchrounos
//js is a line by line execution lan,so the code which work 1 is declaration and then fn & log
//but here as we set a web api and time as a call back fn it becames 
// asynchrounous and 1 work log then fn after 2 sec


let x = 10;

function abc(a){
    setTimeout(() =>{
        console.log('callback fn');
    },2000);

}

abc(x);
console.log('welcome');


//CALL BACK HELL

//inversion of control- that the code is depend each other and if any err come everything
//pyramid of dume- that the code grows horizontally affects readability
//the repeating callback fn on callback fn is call backhell


let cart = ['pen','pencil','book'];

checkout(cart,function(orderId){
    paymenttoproceed(orderId,function(paymentId){
        confirmOrder(paymentId,...)
    })

})

//PROMISE
//promise is to overcome the drawbacks of callback fn 
//promis is an object which has 2 properties pro-state & pro-result
// it has default argumrnt resolve and reject in a call back fn
//call back fn in a promise is producing fn


let promise = () => {
    return new Promise(function(resolve,reject){
       resolve('fn is resolved');
    })
}
console.log(promise());

//promise can be checked using 'promise().then'

let promise1 = () => {
    return new Promise(function(resolve,reject){
       resolve('fn is resolved');
    })
}

promise1().then(function(result){
    console.log(result)
},function(err){
    console.log(err.message)});


let mobile = {
    name: "Samsung-galaxy-s22" ,
    batterycapacity : 3700,
    RAM : 8,
    storage : 128,
    specification(){
      console.log(`Mobile is ${this.name} it's RAM is ${this.RAM} mAh`);
    }
}
mobile.specification();

let mobile2 = {
  name: "iPhone 14" ,
  RAM : 6,
  storage : 256,
}
mobile2.specification = mobile.specification;
mobile2.specification();


12

class Bikes {
  constructor(brand,model,price){
    this.brand = brand;
    this.model = model;
    this.price =price;
  }
 display(){
  console.log(`Brand of the bike is ${this.brand},it's model is ${this.model}  and it is in a price range of ${this.price} `);
  
 }
}
const bike = new Bikes('Royal-Enfiled','Himalayan','2.16lakh');
bike.display();

let student = {
  course : 'MERN',
  age: 21,
  topics: ['html,javascript,css,react']
}
let res1 = JSON.stringify(student);
let obj = JSON.parse(res1);
console.log(res1);
console.log(obj);
localStorage.setItem("user","nazrin");

let res = localStorage.getItem('user',"nazrin")
console.log(res1);