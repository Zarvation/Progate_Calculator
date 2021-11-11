console.log("Test");
const numbers=document.querySelectorAll('.num');
const calcscreen=document.querySelector('.calc-screen');
const clear=document.querySelector('btn-AC');


const updatescreen=(number)=>{
    calcscreen.value=number;
}

numbers.forEach((number)=>{
    number.addEventListener('click',(event)=>{
        inputNumber(event.target.value);
        updatescreen(curNumber);
    })
})

let prevNumber='';
let curNumber='0';
let operator='';

const inputNumber=(num)=>{
    if(curNumber==='0'){
        curNumber=num;
    }
    else{
        curNumber+=num;
    }
}

const operator = document.querySelectorAll('operator');

operator.forEach=((op)=>{
    operator.addEventListener('click',(event)=>{
        console.log(event.target.value);
    })
})