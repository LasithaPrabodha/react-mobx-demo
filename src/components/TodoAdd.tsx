import React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { inject, observer } from "mobx-react";

@inject('todoStore')
@observer
export default class TodoAdd extends React.Component<any> {
    state = {
        newTodo: ''
    }
    addTodo = () => {
        this.props.todoStore.addTodo(this.state.newTodo);
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
