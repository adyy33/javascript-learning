function calculate(num,callback1,callback2){
    if(num%2===0){
        callback1(num);
    }
    else{
        callback2(num);
    }
}
function even(num){
    console.log(`The number ${num} is even`);
}
function odd(num){
    console.log(`The number ${num} is odd`);
}
calculate(22,even,odd);