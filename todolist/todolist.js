window.setTimeout(function () { //added timeout function to allow html to load before js
  
var todos = [];
var input = prompt('What would you like to do?');

while (input !== 'quit') {
    console.log('**********');
  if (input === 'list') {
      listTodos();
    } else if (input === 'new') {
      addTodos();
    } else if(input === "delete"){
      deleteTodos();
    }
    var input = prompt('What would you like to do?');
}
console.log('See you next time!!');

function listTodos() {
  todos.forEach(function (todo, index) {
    console.log(index + ': ' + todo);//instead of printing array we print each item list
  })
  console.log('**********');    
}

function addTodos() {
  //ask for a new todo
  var newTodo = prompt('Enter new todo');
  //add to todos array
  todos.push(newTodo);
  console.log('Added Todo "' + newTodo + '" to list.'); 
}

function deleteTodos() {
  //ask for the index of todo to be deleted
  var index = prompt('Enter index of todo to delete');
  //delete that todo
  //splice()
  var singletodo = todos.splice(index, 1); //research splice
  console.log('Deleted To Do "' + singletodo + '" from list.');  
};

//see window.setTimeout at line 1
}, 1000);