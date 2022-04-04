import authentication from '../features/auth/AuthSlice';
import todos from '../features/todos/TodoSlice';
import { combineReducers } from '@reduxjs/toolkit'

//Include all the reducer to combine and provide to configure store.

const rootReducer = combineReducers({
    authentication,
    todos,
})


export default rootReducer;