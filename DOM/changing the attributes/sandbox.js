const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href','https://www.bing.com');
link.innerText = "Bing browser"; 

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class','success');
console.log(msg.getAttribute('class'));
msg.setAttribute('style','color:green')



const title = document.querySelector('h1');

title.style.color = 'orange';
title.style.margin = '50px';
title.style.fontSize = '25px';
title.style.margin = ''; //to remove
