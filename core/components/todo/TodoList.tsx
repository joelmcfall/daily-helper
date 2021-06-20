import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Todo } from './Todo';

interface TodoListState {
    value: string;
    todos: SingleTodo[];
}

export interface SingleTodo {
    id: string;
    title: string;
}

const defaultState: TodoListState = {
    value: '',
    todos: [{id: '1', title: 'yes'}],

}

export const TodoList = () => {
    const [state, setState] = useState<TodoListState>(defaultState);

    function handleChange(event: any) {
        setState({...state, value: event.target.value})
    }

    function addTodo(event: any) {
        const newTodo = {
            id: uuid(),
            title: state.value
        }

        setState({
            value: '',
            todos: [...state.todos, newTodo],
        })
    }

    function removeTodo(id: string) {
        const todos = state.todos.filter((todo) => {
            return todo.id != id;
        })

        setState({
            ...state,
            todos,
        })
    }

    function checkTodo(event: any) {
        console.log('yes')
        event.target.classList.toggle('crossed-line')
    }

    function renderTodos() {
        const { todos } = state;

        return todos.map((todo, index) => <
            Todo 
            key={index} 
            handleRemove={removeTodo}
            handleCheck={checkTodo}
            todo={todo} />)
    }

    return (
        <>
            <div>
                <input type='text' value={state.value} onChange={handleChange} placeholder='todo...' />
                <input type='button' onClick={addTodo}/>
            </div>
            {renderTodos()}
        </>
    )
}