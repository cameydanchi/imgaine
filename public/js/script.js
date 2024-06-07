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







