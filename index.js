
// create variable for the submit btn and add an event listener 
// that will call a fxn to add it to the list
let submitBtn = document.querySelector('#submitter');
submitBtn.addEventListener("click", (input) => addToList(input));

//create variable for checklist area
let todoItem = document.querySelector('#addedToDos');

const addToList = (inputInfo) => {
    //add the list element to the HTML using DOM manipulation from the input
    let newItem = document.createElement('label');
    newItem.innerHTML = `
    <label>
        <input type="checkbox" id="userAddedItem"/>
        ${inputInfo}
    </label>
    <br>
    `;
    todoItem.appendChild(newItem);
};
