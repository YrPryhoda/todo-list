import React from 'react';
import TodoListItem from '../todo-list-item/';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onImportant, onDone}) => {    // React components

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem {...itemProps} 
                onDeleted = {() => onDeleted(id)}
                onImportant = {()=> onImportant(id)}
                onDone = {()=> onDone(id)}
                />
            </li>
        );
    });

    return (       // return string for App (only string, number, boolean)
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    ); // {} <- paste React element in JSX code
};

export default TodoList;