import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component{
    render() {
        const {label, onDeleted, onDone, onImportant, important, done} = this.props;
        
      //  const {done} = this.state;
        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        } 
        if(important) {
            classNames += ' important';
        }
        return (
            <span className={classNames}>
            <span className='todo-list-item-label'
            onClick={ onDone }> 
            { label }  
            </span> 
                <button type='button'
                className='btn btn-outline-danger btn-sm float-right'
                onClick={onDeleted}>
                    <i className='fa fa-trash' aria-hidden="true" />
                </button>
                <button type='button'
                className='btn btn-outline-success btn-sm float-right' 
                onClick={onImportant}> 
                    <i className='fa fa-exclamation'  />
                </button>
            </span>
        )
    }
}
