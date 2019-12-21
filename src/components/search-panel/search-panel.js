import React, {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    searchText = 'Что ищем?'; 
    state = {
        term: '',
    }

    onFindЕTask = (e) => {
        const el = e.target.value;
        this.setState({
            term: el
        });     
        this.props.onSearchChange(el);   
    }
    
    render (){

    return (<input type='text' 
    placeholder={this.searchText} 
    value = {this.state.term}
    onChange = {this.onFindЕTask}
    className='form-control search-input'/>
    );
}
};

export default SearchPanel;