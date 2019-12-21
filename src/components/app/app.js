import React, { Component } from 'react';      // React lib
//import ReactDOM from 'react-dom'; // virtual DOM  tree REact
//import components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddPanel from '../add-panel';
//css
import './app.css';

// --------------------------- //
export default class App extends Component {
    // for unique id's of each element of tasks
    itemId = 100;
    // state react obj 
    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make React App'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all'
    };
    
    //foarming task with all properties
    createTodoItem(label) {
        //  {label(name), important, done, id}
        return {
            label,
            important: false,
            done: false,
            id: this.itemId++
        }
    }
    // add by button
    
    addNewTast = (label) => { 
        this.setState(({ todoData }) => {

            const newItem = this.createTodoItem(label);
            //create new arr as copy of todoData + added element
            const newArray = [...todoData, newItem];
            return { todoData: newArray }
        });
    }

    //delete task in trash
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            // return first index of array wich satisfy condition        
            const ids = todoData.findIndex((el) => el.id === id);
            //copy elements by splice to new array
            const before = todoData.slice(0, ids),
                after = todoData.slice(ids + 1),
                newArray = [...before, ...after];
            return {
                todoData: newArray
            }
        });
    }
    
    // general func for changing done/important
    toggleProperty(arr, id, propName) {
    // 
        const ids = arr.findIndex((el) => el.id === id);
        const oldItem = arr[ids];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        //return new arr with changed item
        return [
            ...arr.slice(0, ids),
            newItem,
            ...arr.slice(ids + 1)
        ];
    }
    //event listener of button [!]
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, "important")
            }
        });
    };
    // event listener of button [trash]
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, "done")
            }
        });
    };

    search(arr, term) {
        if (term.length === 0 ) {
            return arr;
        }
        return arr.filter((arr) => {
            return arr.label.toLowerCase().includes(term.toLowerCase()) === true;
        })
    }

onSearchChange = (term) => {
    this.setState ({term});
};
filter (items, val) {
    switch(val) {
        case 'all':
            return items;
        case 'active':
            return items.filter((item) => !item.done);
        case 'done':
            return items.filter((item) => item.done);
        default:
            return items;
    }
}
onFilterChange = (filter) =>
{ this.setState({filter})};


sendRequest = (data) => {
    const json = JSON.stringify(data);
    let request = new XMLHttpRequest();
            // посылаем запрос на адрес "/user"
             request.open("POST", "/");   
             request.setRequestHeader("Content-Type", "application/json");
             request.send(json);
}






    render() {
        
        // create local todoData
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filter(
                 this.search(todoData, term), filter);
        // find all elements with 'done' == true
        const doneCount = todoData.filter((el) => el.done).length;
        // subtrack all - done
        const todoCount = todoData.length - doneCount;
        this.sendRequest(todoData);
        return (
            <div className='todo-app'>
                <AppHeader toDo={doneCount} done={todoCount} />
                <SearchPanel onSearchChange = {this.onSearchChange}/>
                <ItemStatusFilter 
                filter = {filter}
                onFilterChange =  {this.onFilterChange}/>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onImportant={this.onToggleImportant}
                    onDone={this.onToggleDone} />
                <AddPanel onAddNewTask={this.addNewTast} />
            </div>
        );
    }

};
