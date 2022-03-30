import { action, computed, makeObservable, observable } from "mobx";
import { TodoService } from "../services/todo.service";

// Standard interface and functions
export interface Todo {
    id: number;
    text: string;
    done: boolean;
}


const removeTodo = (todos: Todo[], id: number): Todo[] =>
    todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
    ...todos,
    {
        id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
        text,
        done: false,
    },
];


export interface ITodoStore {
    getTodos: Todo[]
    showCompleted(show: boolean): void;
    setCompleted(id: number, done: boolean): void;
    removeTodo(id: number): void;
    addTodo(newTodo: string): void;
    load(url: string): void;
}

// MobX implementation
export class TodoStore implements ITodoStore {
    @observable _showCompleted = false;
    @observable todos: Todo[] = [];

    constructor(private readonly todoService: TodoService) {
        makeObservable(this);
    }

    @action removeTodo(id: number) {
        this.todos = removeTodo(this.todos, id);
    }

    @action addTodo(newTodo: string) {
        this.todos = addTodo(this.todos, newTodo);
    }

    @action setTodos(todos: Todo[]) {
        this.todos = todos;
    }

    @action showCompleted(show: boolean) {
        this._showCompleted = show;
    }

    @action setCompleted(id: number, done: boolean) {
        const i = this.todos.findIndex(todo => todo.id === id)

        this.todos[i].done = done;
    }

    @action async load() {
        const tds: Todo[] = await this.todoService.loadTodos();

        this.setTodos(tds)
    }

    @computed get getTodos() {
        if (this._showCompleted) return this.todos.filter((todo: Todo) => todo.done);

        return this.todos;
    }
}
