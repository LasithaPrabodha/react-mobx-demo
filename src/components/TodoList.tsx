import React from "react";
import { Button, Input, Flex, Checkbox, Heading, SimpleGrid } from "@chakra-ui/react";
import { inject, observer } from "mobx-react";
import { Todo } from "../store/todo.store";


@inject('todoStore')
@observer
export default class TodoList extends React.Component<any> {
    render() {
        return (
            <>
                <SimpleGrid columns={2} spacing={10}>
                    <Heading>Todo List</Heading>

                    <Checkbox onChange={(e) => this.props.todoStore.showCompleted(e.target.checked)}>Show only completed</Checkbox>
                </SimpleGrid>
                {
                    this.props.todoStore.getTodos.map((todo: Todo) => (
                        <Flex pt={2} key={todo.id}>
                            <Checkbox
                                onChange={(e) => this.props.todoStore.setCompleted(todo.id, e.target.checked)}
                                checked={todo.done}
                            />
                            <Input
                                mx={2}
                                value={todo.text}
                                onChange={(evt) => (todo.text = evt.target.value)}
                            />
                            <Button
                                onClick={() => {
                                    this.props.todoStore.removeTodo(todo.id);
                                }}
                            >
                                Delete
                            </Button>
                        </Flex>
                    ))
                }
            </>
        );
    }
}

