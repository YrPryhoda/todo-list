import React from 'react'; 
import './app-header.css';

const AppHeader = ( {toDo, done} ) => {
    return (
    <div className='app-header d-flex'>
    <h1> Todo list</h1>
    <h2>{done} more to do, {toDo} done</h2>
    </div>
    );
};

export default AppHeader;