// "use strict"

let caruselImages = ['pictur1.webp', 'pictur2.webp', 'pictur3.webp', 'pictur3.webp'];
let numberDiv = document.getElementsByClassName('number')[0];
let inNumber = numberDiv.getElementsByTagName('div');
let img = document.getElementsByClassName('carusel-img')[0];
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let formDiv = document.getElementsByClassName('form')[0];
let form = document.getElementsByTagName('form')[0];
let login = document.getElementById('login');
let index = [0];

function show(){
    formDiv.style.display = 'block'   
    formDiv.style.backgroundColor = 'rgb(20, 20, 20, 0.5'; 
}

addEventListener('click', (e)=>{
    if(!e.composedPath().includes(form) && !e.composedPath().includes(login) ){
        formDiv.style.display = 'none';   
    };    
    
})

next.addEventListener('click', (e)=>{
   index[0]++;
   change(index);
})

previous.addEventListener('click', ()=>{
    index[0]--;
    change(index);
})

function change(index){
    if(index[0] >= caruselImages.length){
        index[0] = 0;
    }
    else if(index[0] <= -1){
        index[0] = caruselImages.length-1;
    }
    img.src = '../static/images/'+caruselImages[index[0]];
    for(let i = 0; i<inNumber.length; i++){
        if(i == index[0]){
            inNumber[i].style.backgroundColor = 'rgb(200, 200, 200)';
            inNumber[i].style.color = '#24252a';

        }else{
            inNumber[i].style.backgroundColor = 'transparent';
            inNumber[i].style.color = 'white';

        }
    }
}

let products = [
    {
        id:1,
        name: 'sefiller',
        image: '../static/images/book1.jpg',
        date:'03.03.1992'
    },
    {
        id:2,
        name: 'bir umman nifret',
        image: '../static/images/book1.jpg',
        date:'03.03.1993'
    },
    {
        id:3,
        name: 'xezer',
        image: '../static/images/book1.jpg',
        date:'03.03.1992'
    },
    {
        id:4,
        name: 'bir umman nifret',
        image: '../static/images/book1.jpg',
        date:'03.03.1993'
    }
]

let books = document.getElementsByClassName('books')[0];

for(let i of products){

    var book = `
        <div class='book'>
            <div>
                <img src='${i.image}' alt='sekil yoxdur'>
                <div class='date'>${i.date}</div>
                <div>Name: ${i.name}</div>
                <a href='about/${i.id}'>About</a>
            </div>
        </div>  
    `
    books.insertAdjacentHTML("beforeend", book)
}

for(let i = 0; i<caruselImages.length; i++){
    var div = document.createElement('div'); // <div></div>
    div.innerHTML = i+1;

    div.addEventListener('click', (e)=>{
        index[0] = Number(e.target.innerHTML)-1;
        change(index);
    });

    numberDiv.appendChild(div);
}

inNumber[index].style.backgroundColor = 'rgb(200, 200, 200)';
inNumber[index].style.color = '#24252a';
let loop = setInterval(()=>{
    change(index);
    index[0]++;
}, 3000)
