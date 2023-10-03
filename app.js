let todo = [];

let addInputs = document.getElementById('addInput');
let addDates = document.getElementById('addDate');
let task_container =document.getElementById('task_container');




todocard=(del)=>{ 
        //for event bubbling call

}

delcall=(del)=>{
    //for event bubbling call
    
}
//for deleting elements
svgdel=(del)=>{
    
    if(del.target.nodeName=='svg'){
        let dotoitem = del.target.parentElement.parentElement;
        dotoitem.remove();
        todo.splice(del,1);//delete element from todo array
        
        console.log("deleted");
       }
   
}
cont=(x)=>{
     //for event bubbling call
}

//checking for task completed
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
//for creating element 
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
    del.addEventListener('click',delcall)

    

    //creating delete svg
    let del_svg=document.createElementNS("http://www.w3.org/2000/svg", "svg");
    del_svg.setAttribute("viewBox","0 0 16 16");
    del_svg.setAttribute("width","18");
    del_svg.setAttribute("fill","white")
    del_svg.innerHTML='<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>';

    del.appendChild(del_svg)
    del_svg.addEventListener('click',svgdel)

    task_container.appendChild(taskEdit);
    taskEdit.appendChild(container);
    container.appendChild(checkbox_flex)
    checkbox_flex.appendChild(checkbox);
    checkbox_flex.appendChild(taskdesc);
    container.appendChild(dueDate);
    taskEdit.appendChild(del);


    })
    
}
//add button call
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

