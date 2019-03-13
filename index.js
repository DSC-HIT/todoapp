function addTodo(){
    var todo = document.getElementById('todoInput').value;
    if(todo === ''){
        alert('field empty!');
    }else{
        var outputMarkup = `<li id="todoItem" onclick="removeTodo(event)">${todo}</li><br>`;
        document.getElementById('todoArea').innerHTML += outputMarkup;
    }
}
function removeTodo(event){
    var source = event.target;
    source.remove(source);
}