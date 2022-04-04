import { all, fork } from 'redux-saga/effects';
import * as authenticateSagas from '../features/auth/AuthApi';
import * as todosSaga from '../features/todos/TodoApi';

// Here you can include all the saga which you write for components
export default function* rootSaga() {
    yield all([...Object.values(authenticateSagas), ...Object.values(todosSaga)].map(fork));
}
