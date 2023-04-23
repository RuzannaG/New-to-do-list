
 export const TodoFooter =({todolist,setList})=>{

     const restoreDelete=()=>{
   setList(todolist)
     }

     const deletehandeClik=()=>{
             setList([])
     }
 return(
    <div className="delete">
    <button onClick={restoreDelete}> Restore deleted task</button>
    <button onClick={deletehandeClik}>Delete all tasks</button>
</div>
 )

 }