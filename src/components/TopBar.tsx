import React from "react";
import { Button, Grid } from "@chakra-ui/react";

export class TopBar extends React.Component<any> {

    onLoad = () => {
    };

    signOut = () => {
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