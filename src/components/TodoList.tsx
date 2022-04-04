import React, { useEffect } from "react";
import { Button, Input, Flex, Checkbox, Heading, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { loadTodos, removeTodo, setCompleted, setText, showCompleted } from "../features/todos/TodoSlice";


export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todos.todos)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos())
    }, []);


    return (
        <>
            <SimpleGrid columns={2} spacing={10}>
                <Heading>Todo List</Heading>

                <Checkbox onChange={(e) => dispatch(showCompleted(e.target.checked))}>Show only completed</Checkbox>
            </SimpleGrid>
            {
                todos.map((todo: any) => (
                    <Flex pt={2} key={todo.id}>
                        <Checkbox
                            onChange={(e) => dispatch(setCompleted({ id: todo.id, done: e.target.checked }))}
                            checked={todo.done}
                        />
                        <Input
                            mx={2}
                            value={todo.text}
                            onChange={(evt) => dispatch(setText({ id: todo.id, done: evt.target.value }))}
                        />
                        <Button
                            onClick={() => {
                                dispatch(removeTodo(todo.id))
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

