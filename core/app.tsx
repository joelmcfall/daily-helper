import React from 'react';
import { Navbar } from './components/navbar'
import { TodoList } from './components/todo/TodoList';

export const App = () => {
    return (
        <>
            <Navbar />
            <TodoList />
        </>
    )
}


