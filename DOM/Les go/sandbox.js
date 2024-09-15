const para = document.querySelector('p');
// console.log(para.innerText);

// para.innerText = "Ninjas are great!!"

// para.innerText += ", what do u thik";

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ", new Text";
})


const content = document.querySelector('.content');
content.innerHTML = '<h2> This property can change inner HTML</h2>';


const people = ["Mario", "luigi", "Yoshi"];

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`;
})