// the initial list, starts with 0
todo = 0;

$("#add").on("click", function() {
    
    event.preventDefault();
    
    var toDoTask = $("#toDo").val().trim();

    var toDoItems = $("<p>");
    
    toDoItems.attr("")
})