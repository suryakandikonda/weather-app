import React, { Component } from 'react';
import {Jumbotron, Spinner, Form} from 'reactstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Moment from 'react-moment';

function samp(props) {
    console.log("samp is done" + props.city);
    return (
        <div>
            <p>{props.city}</p>
        </div>
    );
}

function Weather(props) {

    const city = props.city;

        console.log("From weather: " + props.city);
        return (
           <React.Fragment>
                <div className="weatherBox container shadow">
                    <div className="row">
                        <div className="col">
                            <div className="weatherBoxContent">
                                <h2 className="display-4">{city}</h2>
                                <h6 className="">April 19, 2020</h6>
                            </div>
                            <samp />
                        </div>
                        <div className="col">
                            <div className="weatherBoxTemp">
                                <h1 className="display-1">72 &ordm;</h1>
                            </div>
                        </div>
                    </div>
                </div>

             
                
           </React.Fragment>
        );
    }

export default Weather;