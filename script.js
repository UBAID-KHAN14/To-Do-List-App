const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");


addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }


  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

 
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");


  taskItem.appendChild(deleteBtn);


  taskList.appendChild(taskItem);

 
  taskInput.value = "";


  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });
});


taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
