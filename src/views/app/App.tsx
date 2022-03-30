import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../auth/Auth';
import Todo from '../todo/Todo';


import { AuthService } from '../../services/auth.service';
import { TodoService } from '../../services/todo.service';
import { AuthStore } from '../../store/auth.store';
import { TodoStore } from '../../store/todo.store';

import './App.css';
const todoService = new TodoService();
const todoStore = new TodoStore(todoService);

const authService = new AuthService();
const authStore = new AuthStore(authService);

const stores = { authStore, todoStore };

export default class App extends React.Component {

  render() {
    return (
      <Provider {...stores}>
        <ChakraProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Auth />} />
              <Route path='/todo' element={<Todo />} />
            </Routes>
          </Router>
        </ChakraProvider>
      </Provider>
    );
  }
}
