
import { Todolist } from "./todolist"
export const TodoMain = ({list,onDelete,onChange,  })=>{
    return (
        <div>

<div>
                <h2>ToDo List</h2>
                <div className="htreebut">
                    <button>All</button>
                    <button>Done</button>
                    <button>Todo</button>
                </div>
                </div>

                <div className="city">
  
{
    list?.map((i)=>{

        return(
            
            <div className="input-list">
              <Todolist key={i.id} i={i} onDelete={onDelete}  onChange={onChange}  />  
            
            </div>
        )
    })
}</div>


        </div>
    )

}