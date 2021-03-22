//week five 
//Monday 22 March
// Learning about switch and breaks


const foo = -3 ;
switch (foo) {
    case 1:
    case 2:
    case 3:
    case 4:
console.log('i like this number')
break;
case -1:
case -2:
        console.log('i love this number')
break;
default:
    console.log('i don\'t like this number.');
}
let isStudent = true

let price = isStudent ? 8 : 12
console.log(price)


//Tuesday 23rd Learning about loops.

for(i= 0; i <= 5; i++) {
    console.log('this is a loop')
}

let arr = [1,2,3,4,5,6,7]
console.log(arr.length)


//0 index base counter DONT FORGET THIS.
for (let i = 0;; i++) {    //if you add a message in the middle of the ;; then it will show a message.
    console.log("loop, i = " + i);   
    if (i > 1)
    break;
};
//gloabal encounter of two or more statements (instructions of code)
let counter =0;
function inc() { counter++; } for (let i = 0; i <10; i++, inc());
console.log(counter); 

for (var i=0; i< 10; i++) {
let x = i;}

// this one doesn't have curly brackets so its not working properly...
//for (var i=0; i< 10; i++) let x = i;

// this has console.log in between the brackets so it will print X
for (var i=0; i< 10; i++) {
    let x = i;
    console.log(x);
}


//nested loop for iterable statement used for 2-dimensional grids
for (let y= 0; y < 2; y++) 
for (let x = 0; x < 2; x++)
console.log(x, y);

for ( let i = 0; i < 3; i++) {  //skip step used for
    if (i == 10) continue ;
     console.log (i); 
    }

   //loops and Strings - treat it as a array 
   // when using 'for, let and of" its saying take each index of the 'text' as a new line.

   let string = 'text'; // the value will be the length of the writing inside the string
   for (let value of string)
   console.log(value);

    //Play around

    //let string = 'Sharleen Quinn'; // the value will be the length of the writing inside the string
    //for (let value of string)
    //console.log(value);

    let array = [0,1,2];
    for (let value of array) // works great as a  array!!
    console.log(value);

    let object = {a: 1,b: 2, c: 3,};
    for (let key of Object.keys(object))//doesn't work as its a object this meeds conversion 
    console.log(key)
    
// this one is hard, pay attention to the capitals 

    // this will only work with String and array BUT not a object.
    // so you can convert an object when using some specific KEYS "object.keys(object)"

//while loop= this will loop until the condition is stated.

//while (condition) { /* so something until condition is false */ }
let c = 0;
while (c ++ < 1000){
    if (c > 1)
    continue;
console.log(c);
}

//ARRAY - SINGLE AND DOUBLE 
