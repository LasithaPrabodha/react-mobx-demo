import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}


const initialState: { todos: Todo[], loader: boolean, showCompleted: boolean } = {
    todos: [],
    loader: false,
    showCompleted: false,
}

const todosSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos = [...state.todos, {
                id: Math.max(0, Math.max(...state.todos.map(({ id }) => id))) + 1,
                text: action.payload,
                done: false,
            }];
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);;
        },
        setTodos(state, action) {
            state.todos = action.payload
            state.loader = false
        },
        loadTodos(state) {
            state.loader = true
        },
        setCompleted(state, action) {
            const i = state.todos.findIndex(todo => todo.id === action.payload.id)

            state.todos[i].done = action.payload.done;
        },
        setText(state, action) {
            const i = state.todos.findIndex(todo => todo.id === action.payload.id)

            state.todos[i].text = action.payload.text;
        },
        showCompleted(state, action) {
            state.showCompleted = action.payload
        }
    },
});

export const { addTodo, removeTodo, setTodos, loadTodos, setCompleted, showCompleted, setText } = todosSlice.actions;
export default todosSlice.reducer;
