import React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

export default class TodoAdd extends React.Component<any> {
    state = {
        newTodo: ''
    }
    addTodo = () => {
        this.setState(state => ({ newTodo: '' }));
    }

    render() {
        return (
            <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
                <Input
                    value={this.state.newTodo}
                    onChange={(evt) => (this.setState(state => ({ newTodo: evt.target.value })))}
                    placeholder="New todo"
                />
                <Button onClick={this.addTodo}>Add Todo</Button>
            </Grid>
        );
    }
}
