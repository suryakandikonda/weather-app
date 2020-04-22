import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Weather from './WeatherComponent';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            city: ""
        };
        this.updateCity = this.updateCity.bind(this);
        this.getCity = this.getCity.bind(this);
    }

    updateCity(event) {
        this.setState({city: event.target.value});
    }



    getCity(event) {
        alert("From Search City:" + this.state.city);
        event.preventDefault();
        
    }

    
    
    render() {
        console.log("City is: " + this.state.city);
        //const cityy = <Weather city={this.state.city}/>
        return (
            <>
                <form onSubmit={this.getCity}>
                    <input id="standard-basic" label="Standard"  onChange={this.updateCity} value={this.state.city}   />
                </form>
                <Weather city={this.state.city} />
            </>
        );
    }
}

export default SearchBar;