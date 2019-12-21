import React, { Component } from 'react';
import './add-panel.css';

class AddPanel extends Component {
    state = {
        label: ''
    };
    searchText = 'Добавим задание';
    onAddTextChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {label} = this.state;
        const input = document.querySelector('.input-new-task');
        if(label !== '' && label !== undefined){
        this.props.onAddNewTask(label);
        this.setState({label: ''});
        //       input.value = '';
              input.placeholder='Добавим задание';
    } else {
        input.placeholder = 'Сюда нужно ввести новое задание!';
    }
}        
    
    render() { 
        return (
            <div className=" form-row align-items-center add-panel">
                <form className="col item-add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text" className="form-control mb-2 input-new-task"
                        id="inlineFormInput" onChange={this.onAddTextChange}
                        placeholder={this.searchText} 
                        value={this.state.label}/>
                    <button type="submit" className="btn btn-success mb-2">
                        Записать </button>
                </form>
            </div>
        )
    }
}


export default AddPanel;
