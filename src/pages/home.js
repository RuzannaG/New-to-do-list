import { useEffect, useState } from "react";
import { TodoMain } from "./todoMain";
import { TodoHead } from './todoHead';
import { TodoFooter } from "./todofooter";
import Memofunc from './memo'

const todolist = [
    { id: 1, name: 'Create React', chek: false },
    { id:2, name: 'Create Todo list', chek: false },
    { id: 3, name: 'Add list', chek: false }


]

export const Home = () => {

    const [list, setList] = useState();
    useEffect(() => {
        setList(todolist)


    }, [])

    

    return (

        <>
            {
                list ?
                    <div>
                        <TodoHead list={list} setList={setList}  />
                        <TodoMain list={list} 
                        onDelete={(i) => {
                            setList(list.filter((t) => t.id !== i.id))
                        }}
                            onChange={(newTodo) => {
                                setList(list.map((i) => {
                                    if (i.id ===newTodo.id){
                                        return newTodo
                                    }
                                    return i;
                        }))
                            }}  />
                        <TodoFooter setList={setList} todolist={todolist} /> </div> :
                    <div></div>


            }

<Memofunc/>
        </>
    )
}