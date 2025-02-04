
//create variable to hold to-do list items
const listItems = [];

//create variable for checklist area
const todoItem = document.querySelector('#currentToDos');

//add input to todo list
let inputBox = document.querySelector('#toDoInput');

let submitBtn = document.querySelector('#submitter');

let currentInput = '';



inputBox.addEventListener("input", function(event){
    // create variable for whats in the input currently
    currentInput = event.target.value;
});

submitBtn.addEventListener("click", (event) => {
    //keep page from refreshing by:
    event.preventDefault();
    //when btn pressed, info is loaded
    let newItem = document.createElement('div');
    newItem.className='listItem';
    newItem.innerHTML = `
    <div class='itemText'>${currentInput}</div>
    <button class="x">x</button>`;
    todoItem.appendChild(newItem);
    listItems.push(currentInput);
    //clear variables
    inputBox.value = '';
    currentInput = '';
});


todoItem.addEventListener("click", (event) => {
    //this will strikethrough an item when its clicked
    if(event.target.classList.contains('itemText')){
        event.target.classList.toggle('striked');
    }
    if(event.target.classList.contains('striked')){
        event.target.className.toggle('itemText');
        //add back to array
        listItems.push(event.target.textContent);
    }
    if(event.target.classList.contains('x')){
        let elem = event.target.parentNode;
        elem.remove();
    }
});


