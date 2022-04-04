import React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "../../components/TopBar";
import TodoList from "../../components/TodoList";
import TodoAdd from "../../components/TodoAdd";

export default class Todo extends React.Component<any> {

    render() {
        return (
            <ChakraProvider theme={theme}>
                <Box maxWidth="2xl" margin="auto" p={5}>
                    <TopBar />
                    <TodoList />
                    <TodoAdd />
                </Box>
            </ChakraProvider>
        );
    }
}