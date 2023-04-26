import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

export const TodoHead = ({ list, setList }) => {
    const [text, setText] = useState();
    const inputRef=useRef();

    const handleChange = (e) => {
        
        setText(e.target.value)
        console.log(text)
    }
    const handleAdd = () => {
       
        if (text !== '') {
            setList([...list, {
                id: Math.random(),
                name: text,
                chek: false
            }])
        }

        setText('')
    }
 useEffect(()=>{
     inputRef.current.focus();
 },[])


    return (
        <div className="header" >
            <h1>Add your todo-items</h1>
            <form onSubmit={(e) => {
            e.preventDefault();
            handleAdd(text)
        }}><input onChange={handleChange} value={text} className="inp" placeholder="Enter a Todo"  ref={inputRef}/>
                <button onClick={handleAdd} className="btn" type="submit">Add new Task</button></form>

        </div>
    )
}
TodoHead.propTypes = {
    list: PropTypes.array,
    setList: PropTypes.func
}