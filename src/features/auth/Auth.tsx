import React, { FC, useState } from "react";

import { Box, Button, Input } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { login } from "./AuthSlice";
import { RootState } from "../../app/store";
import { Navigate } from "react-router-dom";

interface Props { }

const Auth: FC<Props> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated)

    if (isAuthenticated) return (<Navigate to="/todos" />)

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' margin={'auto'} marginTop={40} >
            <div className="container">
                <Input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button onClick={() => dispatch(login({ email, password }))} marginTop={6}>
                    Login
                </Button>
            </div>
        </Box>
    )
}

export default Auth;
