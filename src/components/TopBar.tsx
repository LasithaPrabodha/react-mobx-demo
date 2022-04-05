import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { connect } from "react-redux";
import { RootState } from "../app/store";
import { signOut } from "../features/auth/AuthSlice";
import { Dispatch } from "redux";

export class TopBar extends React.Component<any> {
    render() {
        return (
            <Flex mt={40}>
                <Text fontSize='md' flex='1'>Hi {this.props.user.email}</Text>
                <Button onClick={this.props.signOut}>Sign out</Button>
            </Flex>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signOut: () => dispatch(signOut()),
})

const mapStateToProps = (state: RootState) => ({
    user: state.authentication.user
})



export default connect(mapStateToProps, mapDispatchToProps)(TopBar);