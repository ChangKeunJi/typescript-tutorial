
const page = document.querySelector('.page');

var p = document.createElement("p");
p.innerHTML = 'hello';
document.body.appendChild(p);
page?.appendChild(p)