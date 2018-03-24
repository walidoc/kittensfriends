import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            kittens : [],
            searchField : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ kittens : users }));      
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

        if(this.state.kittens.length === 0) {
            return <h1 className='tc'>Loading..</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>kittens friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList kittens={filteredKittens}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;