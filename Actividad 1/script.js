function addTask(){
    var taskInput = document.getElementById("taskInput");
    var tasklist = document.getElementById("taskList");

    if(taskInput.ariaValueMax.trim() !== ""){
        var newTask = document.createElement("li");
        newTask.textContent = taskInput.value;
        tasklist.appendChild(newTask);
        taskInput.value= "";

    }else{
        alert("Por Favor, ingresa una tarea válida.");
    }
}