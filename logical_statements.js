/***
 * 
 * Today we will explore the following:

1.Various logical statement: 
  a. various operator and what's their meaning:
  ==,
  b.if, elseif, while, do while, switch and more
2. We will get into ternery statement(shorter syntax for if else statements)
3. We will get into functions, scopes, and how functions create sepearte scopes for variables
4. We will get more details into global variable, local variable, let, var, const. 
What is variable leaking, how we can prevent it.

5. We will get into es6 fat arrow functions... What's the advantage of using it. 


***/


///////Exercise 1: Explore various javascript operator

let a='5';
let b=5;
let c='5.0';
let d=6;

if(a==b){
    console.log('a==b');
}
else{
    console.log('NOT a==b');
}

if(a===b){
    console.log('a===b');
}
else{
    console.log('NOT a===b');
}
// == checks for value. but === checks both for value and type

if(a==c){
    console.log(a,c,'a==c');
}
else{
    console.log(a,c,'a==c NOT TRUE');
}

////NOT Operator is != for value, !== for value and type

///More operators: >(greater than), <(less than), >=(greter than or equal), <=(less than or equal)
//<>(not equal)

///Exercise 2: explore various greater than and less than operators

a=15;

if(a<20){
    console.log(a,' is less than 20');
}

if(a<=20){
    console.log(a,' is less than or equal to 20');
}

if(a>20){
    console.log(a,' is greater than 20');
}
else{
    console.log(a, 'is NOT greater than 20');
}

////Have them explore >= operator with values

//// Let's explore if, else if, and else logical statment in same code block

let today='Thursday';

if(today=='Monday'){
    console.log('Today is Monday');
}
else if(today=='Wednesday'){
    console.log('Today is Wednesday');
}
else{
    console.log('Today is some other day');
}

////Give them an excercise to understand this. explain how only one block of code
//gets executed in if,else if, and else statement.


////Let's move on to priority of operations

//   && || 

/*
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()	Get the time. ECMAScript 5.
*/

let date_1=new Date();

console.log('getDate():',date_1.getDate());
console.log('getFullYear():',date_1.getFullYear());
console.log('getMonth():',date_1.getMonth());
console.log('getHours():',date_1.getHours());
console.log('getMinutes():',date_1.getMinutes());
console.log('getSeconds():',date_1.getSeconds());
console.log('getMilliseconds():',date_1.getMilliseconds());
console.log('getTime():',date_1.getTime());
console.log('getDay():',date_1.getDay());
//console.log('now():',date_1.now());

////Let's explore switch statement.

let x=5;

switch(x){
    case 1:
      console.log('x is 1');
      break;

    case 2:
      console.log('x is 1');
      break;
    case 3:
      console.log('x is 3');
      break;
    case 4:
      console.log('x is 4');
      break;
    case 5:
      console.log('x is 5');
      break;
    
    default:
       console.log('default or last case is hit');
       break;
}


////Let's explore the while and do while statements

x=0;
while(x<10){
    console.log(x,' is still less than 10');
    x++;
}

x=5;

do{
    console.log(x);
    x++;
}
while(x==5);

////Be careful when using while statements. Sometimes they go into an infinite loop
//and causes the browser to freeze. In that case, you have to force quit the browser.

////Example of ternary statements

x=6;

if(x==5){
    console.log('x is indeed 5');
}
else{
    console.log('nope! x is not 5');
}

////Ternery statement is shorter and good for one liners
x==5?console.log('x is indeed 5'):console.log('nope! x is not 5');










