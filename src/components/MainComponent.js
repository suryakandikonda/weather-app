import React, { Component } from 'react';
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
                <h1 className="display-3 titleTag">Weather App</h1>
                <SearchBar className="container" />
                <br></br><br></br>
                
            </React.Fragment>
            
        );
    }
}

export default Main;