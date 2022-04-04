import { all, call, put, takeLatest } from 'redux-saga/effects'
import { loadTodos, setTodos } from './TodoSlice';
import { getRequest } from '../../app/axiosClient'
import { AxiosResponse } from 'axios';


function* setTodosAPI() {
    try {
        const response: AxiosResponse = yield call(() => getRequest("todos"));
        yield put(setTodos(response.data));
    } catch (e) {
        yield put(setTodos([]));
    }
}


export function* todosSaga() {
    yield all([takeLatest(loadTodos, setTodosAPI)]);
}
