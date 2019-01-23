/***
 * 
 * Today we will explore the following:

1.Various logical statement: 
  a. various operator and what's their meaning:
  ==,
  b.if, elseif, while, do while, switch and more
2. We will get into ternery statement(shorter syntax for if else statements)

>>>> We start here for functions
3. We will get into functions, scopes, and how functions create sepearte scopes for variables
4. We will get more details into global variable, local variable, let, var, const. 
What is variable leaking, how we can prevent it.

5. We will get into es6 fat arrow functions... What's the advantage of using it. 


***/

///function example

function doSum(param1, param2,param3){
    let output=param1+param2+param3;
    return output;
}

let sum=doSum(1,2,3);
console.log('sum is:',sum);

////function has a name. it might have parameters or function arguments.
///it might do any type of calculation. It might return value. If it doesn't
//return value, then when we call it, it wont return any value and will be undefined

x=10;

function changeX(x){
   x=5;
   console.log('x insdie function context is',x);
}

changeX(10);
console.log('x out of function context is',x);

////This proves that function creates separate context for variables which is GOOD!


function calculateInterest(initialDeposit, percentReturn, termInYears){
    return initialDeposit * Math.pow((1+(percentReturn/100)),termInYears);
}

console.log('1000 after 10 years at 5% interest will be:',calculateInterest(1000,5,10));

////Excercises, lets write some useful function

///Write a function that checks if a number is odd or not
function oddOrEven(x){
    if(x%2==0){
        console.log(x,'is even');
    }
    else{
        console.log(x,'is odd');
    }
}

oddOrEven(5);
oddOrEven(6);
oddOrEven(7);
oddOrEven(100);

///Write a function that checks if a number is prime

///Prime number is a number that can't be divided by any other number
//but that number itself and 1 

function isPrime(x){
    for(let i=2; i<x; i++){
        if(x%i==0){
            //if it's divisible by any other number
            return false;
        }
    }

    return true;

}

console.log('is 1 prime',isPrime(1));
console.log('is 2 prime',isPrime(2));
console.log('is 3 prime',isPrime(3));
console.log('is 4 prime',isPrime(4));
console.log('is 5 prime',isPrime(5));
console.log('is 6 prime',isPrime(6));
console.log('is 7 prime',isPrime(7));
console.log('is 8 prime',isPrime(8));
console.log('is 9 prime',isPrime(9));
console.log('is 27 prime',isPrime(27));
console.log('is 47 prime',isPrime(47));
console.log('is 57 prime',isPrime(57));
console.log('is 100 prime',isPrime(100));


///Write a function that calculates fibonacci sum




///Write a function that calculates factorial

function factorial(x){
    let output=1;
    for(let i=1; i<=x; i++){
        output=output*i;
    }
    return output;
}

console.log('factorial 3 is:',factorial(3));
console.log('factorial 5 is:',factorial(5));
console.log('factorial 10 is:',factorial(10));

function factorialRecur(x){
    if(x==1){
        return 1;
    }
    return x*factorialRecur(x-1);
}

console.log('factorialRecur 3 is:',factorialRecur(3));
console.log('factorialRecur 5 is:',factorialRecur(5));
console.log('factorialRecur 10 is:',factorialRecur(10));

//console.log(this);
/*
var arr = [1, 2, 3, 4, 5, 6];
sum=arr.reduce(function (total, e, i, arr) {
  return total + i;
}, 10);
console.log(sum);
*/

////Show examples of converting regular functions to es6 format





