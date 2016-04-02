
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    //var todo_thing = document.getElementById('todo-input').value;
  //  var content = document.createTextNode(todo_thing);
    
   var fContent = document.getElementById('todo-input').value;
   var newText = document.createTextNode(fContent);
   var newList = document.createElement('li');
   var classContainer = document.getElementsByClassName('todo-list-items')[0];
   

    newList.appendChild(newText);
    classContainer.appendChild(newList);


    

    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
  }

  function markAsDone() {
    
    var toDoList = document.getElementsByClassName('todo-list-items')[0];
    var firstLiElement = toDoList.getElementsByTagName('li')[0];
    var doneList = document.getElementsByClassName("done-list-items")[0];
    var doneItem = doneList.getElementsByTagName('li')[0];

    var removedElement = toDoList.removeChild(firstLiElement);
    doneItem.appendChild(removedElement);
    console.log(removedElement.nodeType)


    



    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
  }
  
}
