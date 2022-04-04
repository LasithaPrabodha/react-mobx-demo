import { all, call, put, takeLatest } from 'redux-saga/effects'
import { login, loginSuccess, loginFailure } from './AuthSlice';
import { postRequest } from '../../app/axiosClient'
import { AxiosResponse } from 'axios';


function* loginAPI(action: ReturnType<typeof login>) {
    try {
        const response: AxiosResponse = yield call(() => postRequest('auth/login', action.payload));
        yield put(loginSuccess(response.data));
    } catch (e) {
        yield put(loginFailure());
    }
}


export function* authenticateSaga() {
    yield all([takeLatest(login, loginAPI)]);
}
