import React, { Component } from 'react';
import Weather from './WeatherComponent';
import SearchBar from './SearchBar';

class Main extends Component {


    constructor(props) {
        super(props);

        this.state = {
            Maincity: null
        };

    }

    updateCity(city) {
        this.setState({Maincity: city});
        console.log("City updated:"+this.state.Maincity);
    }

   


    render() {
        console.log("From main: " + this.state.Maincity);
        return (
            <React.Fragment>
                <SearchBar />
                <br></br><br></br>
                
            </React.Fragment>
            
        );
    }
}

export default Main;