//Garb element by query selector 

const para = document.querySelector('p');

console.log(para);


const error_para = document.querySelector('.error');

console.log(error_para);

const another_error = document.querySelector('div.error');
console.log(another_error);


const copy_selector = document.querySelector('body > h1');
console.log(copy_selector);


const all_selector = document.querySelectorAll('p');
// console.log(all_selector[0]);
// console.log(all_selector[1]);
// console.log(all_selector[2]);



all_selector.forEach(para =>{
    console.log(para);
})


//Grab element by ID

const title = document.getElementById('page-title');
console.log(title);


//Grab element by class name
const errors = document.getElementsByClassName('error');
console.log(errors);


//Garb element by tag name
const paras = document.getElementsByTagName('p');
console.log(paras);