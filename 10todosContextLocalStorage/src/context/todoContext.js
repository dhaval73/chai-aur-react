/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "message",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo) => { },
    deleteTodo: (id) => { },
    toggleComplete : (id)=>{}
})

 const useTodo = ()=> useContext(todoContext)
export default useTodo
export const TodoProvider= todoContext.Provider