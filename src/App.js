import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from "./SearchBox";
import { kittens } from './kittens';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            'kittens' : kittens,
            'searchField' : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchField : event.target.value
        });
    }

    render() {
        const filteredKittens = this.state.kittens.filter(kitten => {
            return kitten.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        return (
            <div className='tc'>
                <h1 className='f1'>kittens friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList kittens={filteredKittens}/>
            </div>
        );
    }
}

export default App;