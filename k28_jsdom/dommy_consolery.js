/*
   your PPTASK:

   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.

    		Write with your future self or teammates in mind.

    		If you find yourself falling out of flow mode, consult
    		other teams
    		MDN

   A few comments have been pre-filled for you...

   (delete this block comment once you are done)
*/

// Team Phantom Tollbooth :: Clyde Sinclair, Fierce Dragon
// SoftDev pd0
// K28 -- Getting more comfortable with the dev console and the DOM
// 2022-02-08t
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-J in Firefox to reveal console)
console.log("AYO");

let i = "hello";
let j = 20;


//assign an anonymous fxn to a let
let f = function(x) {
  let j=30;
  return j+x;
};


//instantiate an object
let o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


let addItem = function(text) {
  let list = document.getElementById("thelist");
  let newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};
// adds a new element to the list with black color

let removeItem = function(n) {
  let listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};
//removes element at the index n

let red = function() {
  let items = document.getElementsByTagName("li");
  for(let i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};
// turns all elements on the list to red

let stripe = function() {
  let items = document.getElementsByTagName("li");
  for(let i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};
// turns things into// GCD red blue red blue.........

/*
--------------------------------------------
*/

// factorial
let fact = function(x) {
  if (x <= 1) {
    return x;
  } else {
    return x * fact(x - 1);
  }
}

// fibonnaci
let fib = function(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

//gcd
//take prime factorization and multiple all common
let gcd = function(a, b){
  if (a == 0 || b == 0){
    return 0;
  }
  else {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b != 0){
      let x = a % b;
      a = b;
      b = x;
    }
    return a;
  }
}

// find prime factors for each numbers seperately
// let prime_factorization = function(n){
//   return 0;
// }

let display = function(n){
  console.log(n);
  let text = document.getElementById("result");
  text.innerHTML = n;
}