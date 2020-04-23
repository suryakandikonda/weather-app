import React, { Component, useEffect, useState } from 'react';
import {Jumbotron, Spinner, Form} from 'reactstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Moment from 'react-moment';





function Weather(props) {

    //const city = props.city;
    const city = props.city;
    const lat = props.lat;
    const lon = props.lon;

        //console.log("From weather: " + props.city);
        /*return (
           <React.Fragment>
                <div className="weatherBox container shadow animated fadeInUp">
                    <div className="row">
                        <div className="col">
                            <div className="weatherBoxContent">
                                <h2 className="display-4">{city}</h2>
                                <h6 className="">April 19, 2020</h6>
                            </div>
                        </div>
                        <div className="col">
                            <div className="weatherBoxTemp">
                                <h1 className="display-1">72 &ordm;</h1>
                            </div>
                        </div>
                    </div>
                </div>

             
                
           </React.Fragment>
        ); */


        const [des, setDesc] = useState("");
        const [temp, setTemp] = useState();
        const [icon, setIcon] = useState("");
        const [humidity, setHumidity] = useState();
        const [windSpeed, setwindSpeed] = useState();

        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid=14da7948c8c451432c4176e27a6e72c7')
    .then(function(resp) { return resp.json() })
    .then((data) => {
        console.log("Result: " + JSON.stringify(data.current.clouds));
        setDesc((data.current.weather[0].description));
        setTemp(Math.round(parseFloat(data.current.temp)-273.15));
        setIcon('http://openweathermap.org/img/wn/'+data.current.weather[0].icon+'@2x.png');
        setHumidity(data.current.humidity);
        setwindSpeed(data.current.wind_speed);
        return (
            <div></div>
        );
    }
        
    

    );

        return (
            <React.Fragment>
                <div className="weatherBox container shadow animated fadeInUp">
                    <div className="row">
                        <div className="col">
                            <div className="weatherBoxContent">
                                <h2 className="display-4">{city}</h2>
                                <h6 className="">April 19, 2020</h6><br></br>
                                <img src={icon} />
                                <h3>{des}</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="weatherBoxTemp">
                                <h1 className="display-1">{temp + '\u00b0'}</h1>
                                <br></br>
                                <h5>Humidity: {humidity + '%'} | Wind speed: {windSpeed + 'm/sec'}</h5>
                            </div>
                        </div>
                    </div>
                </div>

             
                
           </React.Fragment>
        );
    }

export default Weather;