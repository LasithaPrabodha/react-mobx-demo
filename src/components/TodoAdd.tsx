import React, { useRef } from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/TodoSlice";

export default function TodoAdd() {
    const dispatch = useDispatch();
    const input = useRef() as React.MutableRefObject<HTMLInputElement>;

    return (
        <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
            <Input
                ref={input}
                placeholder="New todo"
            />
            <Button onClick={() => dispatch(addTodo(input.current.value))}>Add Todo</Button>
        </Grid>
    );
}
