
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



var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem1 = document.getElementById('item1').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem1));
  

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
  // Edit Button: 
var editBtn = document.createElement('button');
editBtn.className = 'btn btn-danger btn-sm float-right delete';
editBtn.appendChild(document.createTextNode('E'));
li.appendChild(editBtn);
itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}



