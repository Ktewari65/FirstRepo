/*
// getElementsByClassName:

var items= document.getElementsByClassName('list-group-item');
 console.log(items[3]);
 items[0].style.fontWeight='bold';
 items[1].style.fontWeight='bold';
 items[2].style.fontWeight='bold';
 items[3].style.fontWeight='bold';
 items[2].style.backgroundColor='green';


// get ElementByTagName:
var li= document.getElementsByTagName('li');

li[2].style.backgroundColor='green';
li[0].style.fontWeight='bold';
 


for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='grey'
}
 

// querySelector:

var item = document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundColor='green';
var item = document.querySelector('.list-group-item:nth-child(3)');
item.style.display="none";

 */

var newD = document.createElement('div')
newD.className='Hello'
var newDText= document.createTextNode('Hellow World')
newD.appendChild(newDText);
var container= document.querySelector('header .container');
var h1= document.querySelector('header h1');
console.log(newD);
container.insertBefore(newD, h1);

var newDe = document.createElement('div')
newDe.className='HelloW'
var newDText= document.createTextNode('Hellow World')
newDe.appendChild(newDText);
var title =document.querySelector('items .title');
var h1= document.querySelector('items h1');
container.insertBefore(newDe, h1);