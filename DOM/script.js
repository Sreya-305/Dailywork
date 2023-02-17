//get element by id
const heading=document.getElementById("heading");
console.log(heading);
//getElementbyTagname
const head=document.getElementsByTagName("h1");
console.log(head);
//getElementbyClassname
const heading1=document.getElementsByClassName("heading1");
console.log(heading1);
//Query selector
const head1=document.querySelector('#heading');
console.log(head1);
const head2=document.querySelector('.heading1');
console.log(head2);
//querySelectorall
const head3=document.querySelectorAll('.heading1');
console.log(head3);
//Traverse DOM

//getting parentNode from child node
const first=document.querySelector('.one');
const parent=first.parentNode;
console.log(parent);
//getting children nodes from parent node
const sec=document.querySelector('.parent');
console.log(sec.childNodes);
//Getting next sibling nodes
const third=document.querySelector('.one');
console.log(third.nextElementSibling);
//Getting previous sibling nodes
const four=document.querySelector('h3');
console.log(four.previousElementSibling);

//Manipulation
const man1=document.querySelector('.one');
man1.innerHTML="Web is awesome";
man1.style.color='blue';
man1.style.fontSize='50px';
// Adding a class
man1.classList.add('title');
man1.classList.add('title1');
//Removing a class
man1.classList.remove('title');

//Creating elements
const ele=document.createElement('h4');
ele.innerHTML='This is heading 4';
const par=document.querySelector('.parent');
par.appendChild(ele);
console.log(ele);
// creating elements at any position
const ele1=document.createElement("h5");
ele1.innerHTML="This is heading 5";
ele.insertAdjacentElement('afterend',ele1);
console.log(ele1);



