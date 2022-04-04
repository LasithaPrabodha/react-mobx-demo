import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../auth/Auth';
import Todo from '../todo/Todo';


import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/todo' element={<Todo />} />
          </Routes>
        </Router>
      </ChakraProvider>
    );
  }
}
