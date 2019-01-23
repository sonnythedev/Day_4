/*
   1. Write a function that calculates factorial of a number.
   For example, fact(5) should be 5*4*3*2*1=120. First Write with for/while loop. Then write a recursive version of the function

   2. Write a function that checks if a number is prime or not. A prime number is only divisible by that number and 1 only. Return type shoul be boolean.  

   isPrime(5) -->true
   isPrime(6) -->false because 6 is divisible by 2,3
   isPrime(37) -->true
   

   3. Write a function that returns the last item of the array, without modifying the array. Modify this function to return first item and middle item as well. (for middle number, if you have even number of items, then you can take ceil/round the integer to index).

   [1,3,5,7,9,10,21]
   last item is 21 and arr should still be [1,3,5,7,9,10,21]
   
   first item is 1 and arr stays the same
   mid item should be 7

   4. Write a function that takes in an array of number and returns the average of the numbers. The return type should be number. (also make sure items are converted to number first)

   5. Write a function that takes in an array and returns the maximum and minimum value. The return type should be maximum_minimum. For example, [100,2,1,3,4,5] should return 100_1 . Try to do this in one loop.

   */

   function factorial(num){
       let result=1;
       for(let i=1; i<=num; i++){
          result *=i;
       }
       return result;
   }

   function factorial_recur(num){
       if(num==1){
           return 1;
       }
       else{
          //console.log
          return num*factorial_recur(num-1);
       }
   }
   
   function isPrime_yuri(num) {
    if (num == 3 || num == 5 || num == 7) {
        return true
    } else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
        return false
    } else { 
        return true
    }
   }
  
   function isPrime(num){
       let i=2;
       while(i<num){
           if(num%i==0){ // 6 is divisible by 2
               return false;
           }
           i++;
       }
       return true;
   }

 //console.log('factorial 5:',factorial_recur(5));

console.log('isPrime(18): ', isPrime(18));
console.log('isPrime(62): ', isPrime(62));
console.log('isPrime(37): ', isPrime(37));
console.log('isPrime(5): ', isPrime(5));
console.log('isPrime(991): ', isPrime(991));
console.log('isPrime(1024): ', isPrime(1024));

let arr=[1,2,3,4,5,6,7,8]; //8 items

function getLastItem(arr){
    if(arr.length==0) return arr;
    return arr[arr.length-1]+1; //it's adding 1 after it's accesing the last item still not modiying the array itself
}
function getFirstItem(arr){
    if(arr.length==0) return arr;
    return arr[0];
}
function getMidItem(arr){
    if(arr.length==0) return arr;
    let midIndex=Math.floor((arr.length)/2);
    return arr[midIndex];
    //return arr[Math.ceil((arr.length-1)/2)];
}
console.log('arr:',arr);
console.log('lastItem:',getLastItem(arr));
console.log('firstItem:',getFirstItem(arr));
console.log('midItem:',getMidItem(arr));
console.log('arr:',arr);
