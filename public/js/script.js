// const myButton = document.getElementById('btn');
// myButton.onclick = function () {
//     const name = prompt('Enter your Full name.');
//     document.getElementById('name').innerText = name ;
//  }

// //  variable
// const pi = 3.142;
// let name = "Camey";
// let age = 159;
// let presentm= false;
// console.log(name);

// // Object
// const car = {
//     numberPlate: 'GR-384-24',
//     model: 'Benz',
//     color: 'black',
//     weight: 50,
//     weightUnit: 'KG',
//     owner:{
//         name:'Camey',
//         driver:{
//             name:'Micheal',

//         }
//     }
// }

// console.log(car.numberPlate);
// console.log(car.owner.driver.name);
// console.log(car);
// car.owner.driver.name='stephen';
// console.log(car.owner.driver.name);
const tweet1 = {
    text: "i am learning js today",
    likes: 123,
    share: 23,
    retweets: 12,
  };
  const tweet2 = {
    text: "i am learning arrays today",
    likes: 323,
    share: 3,
    retweets: 2,
  };
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[1];
  
  //date 
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getMinutes();
  
  //if/else
  if (today.getMinutes() ==16) {
    console.log("class has ended");
  }
  else {
    console.log("class is in session!");
  }
  

  //string concat
const firstname = 'Camey';
const lastname = 'Brown';
firstname +' '+lastname ;
//  template literal
 
`${firstname.trim()} ${lastname.trim()}`;

// string methods
firstname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
firstname.toUpperCase();

// firstname.trim().charAt(3)
`${firstname.trim().charAt(0)}${lastname.trim().chatAt(0)}`;


const participants = [];
function addParticipant(email){
  if (!email){
    return 'email not provided';
  }
  // check if email if email is valid
  if (!email.includes('@')){
    return 'invalid email provided';
  }

  // add email to the list to the participant:
  participants.push(email);
  //notify them via mail
  // return a response
  return 'Participant added sucessfully' ;
}
addParticipant("camey@kms ");




// // arrays in js 
// const alphabets = ['a','b','c','d'];
// alphabets.join(' ');
// // arrays in js 
// const alphabets = ['a','b','c','d'];
// alphabets.join(' ');



// write a function that will take a user with first name lastname and retuurn fullname

const user3 = {firstname:'kofi',
              lastname: 'Chino',
             }

function fullname(user) {
  
 return {
   ...user,
   fullname: `${user.firstname} ${user.lastname}`
 }
}

fullname(user);
/// ARRAY MAP
const users = [
  {firstname: 'kofi', lastname:'chino'},
  {firstname: 'kwame', lastname:'chino'},
  {firstname: 'kojo', lastname:'chino'},
  {firstname: 'kwabena', lastname:'chino'},
]
users.map(fullname);



// map and return squares of number



function square(number){
  return number ** 2;
}


const numbers = [0,1,2,3,4,5]
numbers.map(square);

// filter and return even numbers
function even(number){
  return number % 2 === 0;
}
numbers.filter(even);
// write a function that  takes a user name and dateOfBirth and return true if their birthday is taday else false
const user = {
  name: 'Camey Brown',
  dateOfBirth:'6/12/1887',
};

function birthday(user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
   if( today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()){
     return true;
   } else{
     return false
   }
}
  
  birthday(user);

// write a function that  takes a user name and dateOfBirth and return true if their birthday is taday else false
function check(user) {
  if (birthday(user)) {
    return 'Happy Birthday!';
  } else {
    return 'Not your day.';
  }
}

check(user);






// bottle class
class Bottle{
  constructor(color,shape,volume){
    this.color = color;
    this.shape = shape;
    this.volume = volume;
  }
  getInfo(){
    return `This is a ${this.color} ${this.shape} bottle with a volume of ${this.volume}ml`
  }
}

const bottle1 = new Bottle('black','circle', 400);
bottle1.getInfo();
const bottle2 = new Bottle('black','round', 800);
bottle2.getInfo();




// object methods


const bottle = {
  color:'red',
  shape: 'square',
  volume: 100,
  getInfo: function(){
    return `This is a ${this.color} ${this.shape} bottle with a volume of ${this.volume}ml`
  }
}

bottle.getInfo();









