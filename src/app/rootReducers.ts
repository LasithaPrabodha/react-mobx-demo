import authentication from '../features/auth/AuthSlice';
import { combineReducers } from '@reduxjs/toolkit'

//Include all the reducer to combine and provide to configure store.

const rootReducer = combineReducers({
    authentication,
})


export default rootReducer;