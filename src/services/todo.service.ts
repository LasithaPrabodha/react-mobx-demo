import { BaseService } from "./base.service";

export class TodoService extends BaseService {
    async loadTodos() {
        const response = await this.get("assets/json/todos.json");

        const parsedResponse = await response.json();

        if (!response.ok) {
            throw new Error(parsedResponse);
        }
        return parsedResponse;
    }
}