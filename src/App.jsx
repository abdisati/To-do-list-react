import { forwardRef,useRef, useState } from "react";


//manage the tasks i.e storing the tasks
// const task={
//   text:'cook food',
//   completed:false
// }


// localStorage.setItem('tasks',JSON.stringify([task]));

// const tasks=JSON.parse(localStorage.getItem('tasks')) || [];


function ListItem({task,handleDelete,index,handleToggle}){
 
  return <li  key={task.text}><span className={`${task.completed?'text-red-500 line-through':''}`} onClick={()=>handleToggle(index)}>{task.text}</span> <button className="btn text-xl" onClick={()=>handleDelete(index)}>Delete</button></li>;
}




function DisplayTodos({tasks, handleDelete, handleToggle}){
  const lists=tasks.map((task,index)=>{
return (
   <ListItem task={task} handleDelete={handleDelete} index={index} handleToggle={handleToggle}/>
);
  });
  console.log(lists);
return(
  <div className="text-2xl px-4 mt-2">
    <ol className="list-disc px-2">
     {lists}
    </ol>
    
  </div>
);
}



// function InputDisplay(){
//   return(
//     <div className="flex flex-row justify-around border-2 px-2 py-1 gap-1 mt-2  w-auto color">
//       <input type="text" placeholder="type the task..." className="border-2 flex-1 text-2xl"/> <button className="btn">Add</button>
//     </div>
//   );
// }

const InputDisplay=forwardRef((props,ref)=>{
  return (<div className="flex flex-row justify-around border-2 px-2 py-1 gap-1 mt-2  w-auto color">
      <input type="text" placeholder="type the task..." className="border-2 flex-1 text-2xl" ref={ref}/> <button className="btn" onClick={props.handleClick}>Add</button>
    </div>);

  });

function ToDoApp(){
  const [tasks,setTasks]=useState([]);
  const InputRef=useRef(null);


function handleClick(){
  //this adds a new task to the task array
  const value=InputRef.current.value.trim();

  //if empty return
  if(!value) return;
  //create a task object
  const task={
    text:value,
    completed:false
  }
  //now save the task to the task list array
  setTasks((prevTasks)=>[...prevTasks,task]);

  //reset the input

InputRef.current.value='';
  
}


function handleDelete(index){
  const prevTasks=tasks.slice();
  prevTasks.splice(index,1);
  setTasks(prevTasks);
}

function handleToggle(index){
  const prevTasks=tasks.slice(); //create a copy
  const task=prevTasks[index];
 task.completed=!task.completed;
 prevTasks[index]=task;
  setTasks(prevTasks);
  console.log("Executed");
  console.log('task.completed '+task.completed);
}
  return (
    <div className="w-100 min-h-24 border-2 px-1">
        <InputDisplay ref={InputRef} handleClick={handleClick} />
        <DisplayTodos tasks={tasks} handleDelete={handleDelete} handleToggle={handleToggle}/>
    </div>
  
  
  );
}

export default function App(){
  return (
    <div className="flex justify-center mt-4">
  <ToDoApp/>
    </div>
    
   
  );

}




