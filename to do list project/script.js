let tasks = [];
function add(){
    const task = document.querySelector('#input-task');
    if(task.value === '') return;
    tasks.push(task.value);
    task.value = '';
    console.log(tasks);
}
function enter(event){
    if(event.key === "Enter"){
        add();
    }
    task_list();
}
function task_list(){
    const div = document.querySelector("#list");
    let html = "";
    for(let i = tasks.length-1;i>=0;i--){
        html += `<div class ="task-container"><p class = "all-tasks" id = "task-no${i}">${tasks[i]} </p> <button class ="inner-btn" onclick = "done(${i})">&#10004;</button> <button class = "inner-btn" onclick="remove(${i})">&#10006;</button></div><br>`;
    }
    div.innerHTML= `${html}`;
}
function clear_tasks(){
    tasks.length = 0;
    console.log(tasks)
    document.querySelector("#list").innerHTML = `${tasks}`;
}
function done(i){
    const element = document.querySelector(`#task-no${i}`);
    element.classList.toggle('done');
    //task_list();
}
function remove(i){
    tasks.splice(i,1);
    task_list();
}