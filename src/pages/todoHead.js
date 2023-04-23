import { useState } from "react";

export const TodoHead = ({list,setList})=> {
    const [text, setText]=useState();
    const handleChange=(e)=>{
        setText(e.target.value)
        console.log(text)
    }
    const handleAdd =()=>{
        if(text!==''){
             setList([...list,{
            id:13,
            name:text
        }])
        }
       
        setText('')
    }

    return (
        <div className="header">
<h1>Add your todo-items</h1>
            <input onChange={handleChange} value={text} className="inp" placeholder="Enter a Todo"/>
            <button onClick={handleAdd} className="btn" type="submit">Add new Task</button>
        </div>
    )
}