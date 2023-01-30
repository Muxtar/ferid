'use strict';

let inputs = document.getElementsByTagName('input');
let is = document.getElementsByClassName('form')[0].getElementsByTagName('i');
let submit = document.querySelector('.login');

let index2 = 0;
addEventListener('keypress', (e)=>{
    if(e.key == 'Enter'){
        inputs[index2].focus();
        index2+=1;
        // alert('run')
        // console.log('isledi')
    }
})

for(let i of inputs){
    i.addEventListener('focusout', (e)=>{
        let label = e.target.parentElement.getElementsByTagName('label')[0];
        if(e.target.value.length == 0){
            label.style.top = '20px'
        }
    })
    i.addEventListener('input', (e)=>{
        let button = document.getElementsByTagName('button')[0];
        if(inputs[0].value.length > 0 && inputs[1].value.length > 0 ){
            document.getElementsByTagName('button')[0].removeAttribute('disabled');
        }
        else{
            document.getElementsByTagName('button')[0].setAttribute('disabled', 'true');
        }
    })
}

for(let i of inputs){
    i.addEventListener('focus', (e)=>{
        let label = e.target.parentElement.getElementsByTagName('label')[0];
        if(e.target.value.length == 0){
            label.style.top = '-10px'
        }
    })
}

for(let i of is){
    i.addEventListener('click', (e)=>{
        let input = e.target.parentElement.getElementsByTagName('input')[0];
        if(e.target.classList[1] == 'fa-eye'){
            e.target.setAttribute('class', 'fa fa-eye-slash');
            input.setAttribute('type', 'text');
        }
        else{
            e.target.setAttribute('class', 'fa fa-eye');
            input.setAttribute('type', 'password');
        }
    })
}


submit.addEventListener('click', (e)=>{
    let userName = inputs[0].value;
    let number = false;
    let upper = false;
    let lower = false;
    for(let i of userName){
        if(! isNaN(i)){
            number = true;
        }
        else if(i.toUpperCase() == i){
            upper = true;
        }
        else if(i.toLowerCase() == i){
            lower = true;
        }
    }
    console.log(number, upper, lower, userName.length >= 3);
})