import React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { inject, observer } from "mobx-react";

@inject('todoStore', 'authStore')
@observer
export class TopBar extends React.Component<any> {

    onLoad = () => {
        this.props.todoStore.load();
    };

    signOut = () => {
        this.props.authStore.signOut()
    }

    render() {
        return (
            <Grid mt={40} mb={6} templateColumns="1fr 1fr" columnGap="3" >
                <Button onClick={this.onLoad}>Load</Button>
                <Button onClick={this.signOut}>Sign out</Button>
            </Grid>
        );
    }
}

export default TopBar;