import { createSlice } from '@reduxjs/toolkit'

export interface IState {
    isAuthenticated: boolean,
    loader: boolean,
}

const initialState: IState = {
    isAuthenticated: false,
    loader: false,
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login(state, action) {
            state.loader = true;
        },
        loginSuccess(state, action) {
            state.loader = false;
            state.isAuthenticated = !!action.payload.access_token
        },
        loginFailure(state) {
            state.loader = false;
            state.isAuthenticated = false;
        },
    },
});

export const { login, loginSuccess, loginFailure } = authenticationSlice.actions;
export default authenticationSlice.reducer;
