import React, { Component } from 'react';
import Weather from './WeatherComponent';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            city: "",
            status:false,
            cityFound:false,
            lat:0,
            lon:0
        };
        this.updateCity = this.updateCity.bind(this);
        this.getCity = this.getCity.bind(this);
    }

    updateCity(event) {
        this.setState({city: event.target.value});
    }



    getCity(event) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&appid=ea76099250443f57a27aa8bd170aca75')
        .then(function(resp) { return resp.json() })
        .then((data) => {
            if(data.cod == 200) {
                this.setState({cityFound:true});
                this.setState({lat:data.coord.lat});
                this.setState({lon:data.coord.lon});
                console.log("City Found");
            }
            else if(data.cod == 404) {
                this.setState({cityFound:false});
                console.log("City not found");
                alert("City not found")
               
                
            }
        });
        
        event.preventDefault();
        
    }

    
    
    render() {
        console.log("City is: " + this.state.city);
        
        if(this.state.cityFound==false) {
            
            return (
                <>
                        <form onSubmit={this.getCity}>
                            <input id="standard-basic" label="Standard"  onChange={this.updateCity} value={this.state.city} className="cityInput shadow-sm animated fadeIn" placeholder="Enter city name" />
                        </form>
                </>
            );
            
        }
        else if(this.state.cityFound == true) {
            
            return (
                <div>
                    <Weather city={this.state.city} lat={this.state.lat} lon={this.state.lon} />
                </div>
            );
        }

        return (
            <>
                <form onSubmit={this.getCity}>
                    <input id="standard-basic" label="Standard"  onChange={this.updateCity} value={this.state.city}  className="cityInput shadow animated fadeIn" />
                </form>
            </>
        );
    }
}

export default SearchBar;