let str='str_2';

switch(str){
    case 'str_1':
      console.log('found the right case');
      break;

    case 'str_2':
       console.log('str_2 is not true');
       break;

    default:
       console.log('this is default condition');
       break;
}


if(str=='str_1'){

}
if(str=='str_2'){

}
else{
    console.log('this is default condition');
}

////An good example of switch statement

let date=new Date();

let d1=date.getDay();
//let d2=date.getDate();
//console.log(d1,d2);

switch(d1){
    case 0:
     console.log('Its Sunday');
     break;
    case 1:
     console.log('Its Monday');
     break;

     case 2:
     console.log('Its Tuesday');
     //runMyTuesdayFunc();
     break;

     case 3:
     console.log('Its Wednesday!');
     break;

     default:
       console.log('Its Doomsday');
       break;
}

x=7;
if(x==5 || true){
   console.log('Hey I am 5!');
}

if(x!=5){

}

let myBool=false;
if(!myBool){ //myBool at this point should be true
    console.log('Negated myBool');
}
else{
    console.log('bool is true');
}

let bool1=true;
let bool2=false;
let bool3=true;

if(!(bool1 || bool2 || bool3)){

}
////Ternery statement

x=7;

//x==5?'true conditon':'false condition';

//x==5?(console.log('x is 5'), x++):(x==6?console.log('x is 6'):console.log('x is not 6'));

x==5?console.log('x is 5'):'';
console.log(x);

let y=(x==5?5:6);
console.log('y is:',y);

///OTHERWISE
/*
if(x==5){ 
    console.log('x is 5');
}
else{
 console.log('x is NOT 5');
}
*/








//true or true =true true and false =false
