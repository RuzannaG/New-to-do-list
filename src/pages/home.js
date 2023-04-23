import { useEffect, useState } from "react";
import { TodoMain } from "./todoMain";
import {TodoHead} from './todoHead';
import { TodoFooter } from "./todofooter";

const todolist =[
    {id:1,name:'Create React'},
    {id:2,name:'Create Todo list'},
    {id:3,name:'Add list'}


]

export const Home = () => {

    const [list,setList]=useState();
     useEffect(()=>{
        setList(todolist)
     },[])
    return(

        <div>
            {
                list?
                <div>
                    <TodoHead list={list} setList={setList}/>
                    <TodoMain list={list} onDelete={(i)=>{
                        setList (list.filter((t)=>t.id !==i.id))
                    }}/>   
                    <TodoFooter setList ={setList} todolist={todolist}/> </div>:
                    <div></div>
             
                
            }
    

        </div>
    )
}