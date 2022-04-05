import { createSlice } from '@reduxjs/toolkit'

export interface IState {
    isAuthenticated: boolean,
    loader: boolean,
    user: any
}

const initialState: IState = {
    isAuthenticated: false,
    loader: false,
    user: null
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        init(state) {
            state.isAuthenticated = !!localStorage.getItem('access_token');
        },
        login(state, action) {
            state.loader = true;
        },
        signOut(state) {
            state.user = null;
            state.isAuthenticated = false;
        },
        loginSuccess(state, action) {
            state.loader = false;
            state.isAuthenticated = !!action.payload.access_token;
            state.user = action.payload.user;
            localStorage.setItem('access_token', action.payload.access_token)
        },
        loginFailure(state) {
            state.loader = false;
            state.isAuthenticated = false;
        },
    },
});

export const { init, login, loginSuccess, loginFailure, signOut } = authenticationSlice.actions;
export default authenticationSlice.reducer;
