let currentResult=0;
btnAdd1.addEventListener("click", add1);
btnAdd5.addEventListener("click", add5);
btnAdd10.addEventListener("click", add10);
btnSub1.addEventListener("click", sub1);
btnSub5.addEventListener("click", sub5);
btnSub10.addEventListener("click", sub10);

function add1(){
    currentResult=currentResult+1;
    result.textContent=currentResult;
}
function add5(){
    currentResult=currentResult+5;
    result.textContent=currentResult;
}
function add10(){
    currentResult=currentResult+10;
    result.textContent=currentResult;
}
function sub1(){
    currentResult=currentResult-1;
    result.textContent=currentResult;
}
function sub5(){
    currentResult=currentResult-5;
    result.textContent=currentResult;
}
function sub10(){
    currentResult=currentResult-10;
    result.textContent=currentResult;
}