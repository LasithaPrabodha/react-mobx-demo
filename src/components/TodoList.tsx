import React from "react";
import { Button, Input, Flex, Checkbox, Heading, SimpleGrid } from "@chakra-ui/react";


export default class TodoList extends React.Component<any> {

    state = {
        todos: []
    }

    componentDidMount() {
        fetch("assets/json/todos.json").then(response => response.json()).then(todos => this.setState(state => ({ ...state, todos: todos })))

    }
    render() {

        const todos = this.state.todos;
        return (
            <>
                <SimpleGrid columns={2} spacing={10}>
                    <Heading>Todo List</Heading>

                    <Checkbox onChange={(e) => { }}>Show only completed</Checkbox>
                </SimpleGrid>
                {
                    todos.map((todo: any) => (
                        <Flex pt={2} key={todo.id}>
                            <Checkbox
                                onChange={(e) => { }}
                                checked={todo.done}
                            />
                            <Input
                                mx={2}
                                value={todo.text}
                                onChange={(evt) => (todo.text = evt.target.value)}
                            />
                            <Button
                                onClick={() => {

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

