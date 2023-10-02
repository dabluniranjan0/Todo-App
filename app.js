let todo = [];

let addInputs = document.getElementById('addInput');
let addDates = document.getElementById('addDate');
let task_container =document.getElementById('task_container');




todocard=(del)=>{ 

     if(del.target.nodeName=='DIV'){
        let dotoitem = del.target.parentElement;
        dotoitem.remove();
        
        console.log("deleted");
       }

}
cont=(x)=>{

}

function taskdone(taskEdit,index){
  
    if(index >=0 && index < todo.length){
        todo[index].completed = !todo[index].completed;
        changebg(taskEdit,index);
    }
 
}

function changebg(taskEdit,index){
        if(todo[index].completed){
            taskEdit.classList.add('taskDone');
        }
        else{
            taskEdit.classList.remove('taskDone');
        }
}

function renderTodo(){
    
    task_container.innerHTML='';
    todo.map((todoData,index)=>{

    let taskEdit =document.createElement('div');
    taskEdit.classList.add('taskEdit');
    taskEdit.addEventListener('click',todocard);

    let container=document.createElement('div');
    container.classList.add('container');
    container.addEventListener('click',cont);

    let checkbox_flex =document.createElement('div');
    checkbox_flex.classList.add('checkbox_flex');

    let checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('click',function(){
        taskdone(taskEdit,index);
    });

    let taskdesc = document.createElement('input');
    taskdesc.type='text';
    taskdesc.classList.add('taskdesc');
    taskdesc.value = todoData.todoInput;
    taskdesc.addEventListener('change',function(){
        console.log('input changed');
        console.log("final value=",this.value);
        todoData.todoInput = this.value;
    })

    let dueDate = document.createElement('p');
    dueDate.classList.add('dueDate');
    
    const dates =new Date(todoData.todoDate);
    const options = { weekday:'long',month:'long',day:'numeric'};
    const finalDate = dates.toLocaleDateString('eng',options);
    dueDate.innerText=finalDate;

    let del =document.createElement('div');
    del.classList.add('delete');

    task_container.appendChild(taskEdit);
    taskEdit.appendChild(container);
    container.appendChild(checkbox_flex)
    checkbox_flex.appendChild(checkbox);
    checkbox_flex.appendChild(taskdesc);
    container.appendChild(dueDate);
    taskEdit.appendChild(del);


    })
    

}

function add(){
    
    let temptodo = {
        todoInput:addInputs.value,
        todoDate:addDates.value,
        completed:false,
    } 

    todo.push(temptodo);
    document.querySelector('#addInput').value="";
    renderTodo();
    
}

