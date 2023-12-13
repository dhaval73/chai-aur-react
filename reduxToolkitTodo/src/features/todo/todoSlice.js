import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{
        id: 1,
        text: "hello bhai log"
    }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    editAble: {},
   
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.unshift(todo)
        }
        ,
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo : (state , action)=>{
            // console.log(action.payload);
            // console.log(state.todos.map((todo)=> todo.id === action.payload.id ?{...todo ,text: action.payload}: todo));
            
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ?{...todo ,text: action.payload.text}: todo)
            state.editAble=null
        }
        ,
        setEditAble: (state,action) => {
            // console.log(state.todos.find((todo) => todo.id === action.payload));
            state.editAble = state.todos.find((todo) => todo.id === action.payload)
        }
    }
})

export const { addTodo, removeTodo , setEditAble , updateTodo } = todoSlice.actions

export default todoSlice.reducer