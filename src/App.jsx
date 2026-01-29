

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
    <div>
      <input type="text" placeholder="type the task..." /> <button>Add</button>
    </div>
  );
}

function ToDoApp(){
  return (
    <>
    <InputDisplay/>
    <DisplayTodos/>
    </>
  );
}

export default function App(){
  return (
    <>
    <ToDoApp/>
    </>
  );

}




