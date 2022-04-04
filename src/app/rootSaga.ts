import { all, fork } from 'redux-saga/effects';
import * as authenticateSagas from '../features/auth/AuthApi';

// Here you can include all the saga which you write for components
export default function* rootSaga() {
    yield all([...Object.values(authenticateSagas)].map(fork));
}
