import React, { useEffect } from "react";
import { Button, Input, Flex, Checkbox, Heading, SimpleGrid, CheckboxGroup, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { loadTodos, removeTodo, showCompleted, updateTodo } from "../features/todos/TodoSlice";


export default function TodoList() {
    const todos = useSelector((state: RootState) => {

        if (state.todos.showCompleted) {
            return state.todos.todos.filter(todo => todo.done)
        }

        return state.todos.todos

    })

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
                    <CheckboxGroup colorScheme='green' defaultValue={todos.filter(todo => todo.done).map(todo => todo.id)} key={todo.id}>
                        <Stack>
                            <Flex pt={2} >
                                <Checkbox
                                    value={todo.id}
                                    onChange={(e) => dispatch(updateTodo({ ...todo, done: e.target.checked }))}
                                    checked={todo.done}
                                />
                                <Input
                                    mx={2}
                                    value={todo.text}
                                    onChange={(e) => dispatch(updateTodo({ ...todo, text: e.target.value }))}
                                />
                                <Button
                                    onClick={() => { dispatch(removeTodo(todo.id)) }}
                                >
                                    Delete
                                </Button>
                            </Flex>
                        </Stack>
                    </CheckboxGroup>
                ))
            }
        </>
    );

}

