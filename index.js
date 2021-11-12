console.log("Test");
const numbers=document.querySelectorAll('.numbers');
const calcscreen=document.querySelector('.calc-screen');
const operators = document.querySelectorAll('.operator');
const clear=document.querySelector('.btn-AC');
const equal = document.querySelector('.btn-equal');
const decimal=document.querySelector('.btn-decimals');
let prevNumber='';
let curNumber=`${calcscreen.value}`;
let operator='';

const updateScreen=(number)=>{
    calcscreen.value=number;
}

const inputNumber=(num)=>{
    if(curNumber==='0'){
        curNumber=num;
    }
    else{
        curNumber+=num;
    }
}

numbers.forEach((number)=>{
    number.addEventListener('click',(event)=>{
        inputNumber(event.target.value);
        updateScreen(curNumber);
    })
})

const inputOp=(op)=>{
    if (operator===''){
        prevNumber=curNumber;
    }
    operator=op;
    curNumber+=op;
    updateScreen(curNumber);
}

operators.forEach((op)=>{
    op.addEventListener('click',(event)=>{
        inputOp(event.target.value);
    })
})

const calculate=()=>{
    let result='';
    switch(operator){
        case '+':
            result=parseFloat(prevNumber)+parseFloat(curNumber);
            console.log(result);
            break
        case '-':
            result=parseFloat(prevNumber)-parseFloat(curNumber);
            console.log(result);
            break
        case '/':
            result=parseFloat(prevNumber)/parseFloat(curNumber);
            console.log(result);
            break
        case '*':
            result=parseFloat(prevNumber)*parseFloat(curNumber);
            console.log(result);
            break
        case '%':
            result=parseFloat(prevNumber/100);
            console.log(result);
            break
        default:
            break;
    }
    curNumber=result;
    operator='';
}

equal.addEventListener('click',()=>{
    calculate();
    updateScreen(curNumber);
})

const clearAll=()=>{
    prevNumber='';
    operator='';
    curNumber='0';
}

clear.addEventListener('click',()=>{
    clearAll();
    updateScreen(curNumber);
})

const inputDecimal=(dot)=>{
    curNumber+=dot;
}

decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value);
    updateScreen(curNumber);
})