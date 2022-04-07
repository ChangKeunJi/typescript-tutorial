"use strict";
const page = document.querySelector('.page');
var p = document.createElement("p");
p.innerHTML = 'hello';
document.body.appendChild(p);
page === null || page === void 0 ? void 0 : page.appendChild(p);
