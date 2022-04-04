import React from "react";

import { Box, Button, Input } from "@chakra-ui/react";
import { inject, observer } from "mobx-react";

import "./Auth.css";
import { Navigate } from "react-router-dom";

@inject('authStore')
@observer
export default class AuthV extends React.Component<any> {
    state = {
        email: '',
        password: '',
        loggedIn: false,
    }

    login = async () => {
        const loggedIn = await this.props.authStore.login({ email: this.state.email, password: this.state.password })

        if (loggedIn) this.setState(state => ({ ...state, loggedIn: true }))
    }

    render() {

        if (this.state.loggedIn) return (<Navigate to="/todo" replace={true} />);

        return (
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' margin={'auto'} marginTop={40} >
                <div className="container">
                    <Input
                        type="email"
                        value={this.state.email}
                        onChange={(event) => this.setState(state => ({ ...state, email: event.target.value }))}
                    />
                    <Input
                        type="password"
                        value={this.state.password}
                        onChange={(event) => this.setState(state => ({ ...state, password: event.target.value }))}
                    />
                    <Button onClick={this.login} marginTop={6}>
                        Login
                    </Button>
                </div>
            </Box>
        );
    }

};
