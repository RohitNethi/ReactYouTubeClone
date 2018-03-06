import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term : ''};
    }
    render(){
        return (
            <div className = "search-bar">
                Search  <input onKeyPress={event => {
                    if (event.key === 'Enter')
                        this.onInputChange(event.target.value)
                }
                }/>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;