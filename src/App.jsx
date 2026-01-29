


//manage the tasks i.e storing the tasks
const tasks=JSON.parse(localStorage.getItem("tasks")) || [];


function DisplayTodos(){
  const lists=[];
return(
  <div>
    {lists}
  </div>
);
}



function InputDisplay(){
  return(
    <div className="flex flex-row justify-around border-2 px-2 py-1 gap-1 mt-2  w-auto">
      <input type="text" placeholder="type the task..." className="border-2 flex-1 text-2xl"/> <button className="btn">Add</button>
    </div>
  );
}

function ToDoApp(){
  return (
    <div className="w-100 min-h-24 border-2 px-1">
        <InputDisplay/>
        <DisplayTodos/>
    </div>
  
  
  );
}

export default function App(){
  return (
    <div className="mt-4 flex flex-row justify-center">
  <ToDoApp/>
    </div>
    
   
  );

}




