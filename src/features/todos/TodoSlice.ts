import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}


const initialState: { todos: Todo[], loader: boolean, showCompleted: boolean, errorMsg: string } = {
    todos: [],
    loader: false,
    showCompleted: false,
    errorMsg: ''
}

const todosSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        removeTodo(state, action) {
            state.loader = true
        },
        loadTodos(state) {
            state.loader = true
        },
        updateTodo(state, action) {
            state.loader = true
        },
        addTodo(state, action) {
            state.loader = true
        },
        addTodoSuccess(state, action) {
            state.todos = [...state.todos, action.payload];
        },
        removeTodoSuccess(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);;
        },
        setTodos(state, action) {
            state.todos = action.payload
            state.loader = false
        },
        updateTodoSuccess(state, action) {
            const i = state.todos.findIndex(todo => todo.id === action.payload.id)

            state.todos[i].done = action.payload.done;
            state.todos[i].text = action.payload.text;
        },
        setEror(state, action) {
            state.errorMsg = action.payload;
        },
        showCompleted(state, action) {
            state.showCompleted = action.payload
        }
    },
});

export const { addTodo, removeTodo, setTodos, loadTodos, updateTodo, showCompleted, updateTodoSuccess, addTodoSuccess, setEror, removeTodoSuccess } = todosSlice.actions;
export default todosSlice.reducer;
