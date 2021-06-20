import React from 'react'
import { SingleTodo } from './TodoList'

interface TodoProps {
    todo: SingleTodo;
    handleCheck: (event: any) => void;
    handleRemove: (id: string) => void;
}

export const Todo = (props: TodoProps): JSX.Element => {
    const { id, title } = props.todo;

    return (
        <div className='todo'>
            <h3 onClick={(event) => props.handleCheck(event)}  >{title}</h3>
            <button onClick={() => props.handleRemove(id)}>delete</button>
        </div>
    )
}