const ul = document.querySelector('ul')
//ul.remove();

const button = document.querySelector('button');

button.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.textContent = 'Something new to do'
    ul.append(li)
    ul.prepend(li);
})


// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click',(e)=>{
//         // console.log("item clicked");
//         // console.log(e);
//         // console.log(e.target);
//         e.stopPropagation();
//         console.log("evemt in LI")
//         //e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//     })
// })

ul.addEventListener('click', (e)=>{
    //console.log('event in ul')

    console.log(e.target);
    if(e.target.tagName === "LI"){
        e.target.remove();
    }
})