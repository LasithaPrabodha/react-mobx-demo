import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { addTodo, addTodoSuccess, loadTodos, removeTodo, removeTodoSuccess, setEror, setTodos, Todo, updateTodo, updateTodoSuccess } from './TodoSlice';
import { deleteRequest, getRequest, postRequest, putRequest } from '../../app/axiosClient'
import { AxiosResponse } from 'axios';
import { RootState } from '../../app/store';

const getTodos = (state: RootState) => state.todos.todos;

function* onLoadTodosAPI() {
    try {
        const response: AxiosResponse = yield call(() => getRequest("todos"));
        yield put(setTodos(response.data));
    } catch (e) {
        yield put(setTodos([]));
    }
}

function* onUpdateTodoAPI(action: ReturnType<typeof updateTodo>) {
    try {
        const response: AxiosResponse = yield call(() => putRequest("todos/" + action.payload.id, action.payload));
        yield put(updateTodoSuccess(response.data));
    } catch (e: any) {
        yield put(setEror(e.message));
    }
}

function* onRemoveTodoAPI(action: ReturnType<typeof removeTodo>) {
    try {
        yield call(() => deleteRequest("todos/" + action.payload));
        yield put(removeTodoSuccess(action.payload));
    } catch (e: any) {
        yield put(setEror(e.message));
    }
}
function* onAddTodoAPI(action: ReturnType<typeof addTodo>) {
    try {
        const todos: Todo[] = yield select(getTodos);
        const request = {
            id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
            text: action.payload,
            done: false,
        }

        const response: AxiosResponse = yield call(() => postRequest("todos", request));
        yield put(addTodoSuccess(response.data));
    } catch (e: any) {
        yield put(setEror(e.message));
    }
}


export function* todosSaga() {
    yield all([
        takeLatest(loadTodos, onLoadTodosAPI),
        takeLatest(updateTodo, onUpdateTodoAPI),
        takeLatest(removeTodo, onRemoveTodoAPI),
        takeLatest(addTodo, onAddTodoAPI),
    ]);
}
