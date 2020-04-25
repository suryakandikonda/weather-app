import React, { Component, useEffect, useState } from 'react';
import Chart from './Charts';




function Weather(props) {

    //const city = props.city;
    const city = props.city;
    const lat = props.lat;
    const lon = props.lon;
    const [list,setList] = useState([]);
    var tomorrow = [];
    var dayAfterTomorrow = [];
    var later = [];
    var laterTwo = [];

    var date = new Date();
    date = date.toDateString();
    
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Eluru&appid=14da7948c8c451432c4176e27a6e72c7')
    .then(res => res.json())
    .then(
        (result) => {
            setList(result.list);
        }
    )


    var i=1;
    while(i<=4) {
        list.map(item => {
            //console.log("Log: " + item.dt_txt);
            
            var dd = item.dt_txt.substr(8,2);
            //console.log("dd: " + dd);
            //var rr = (new Date().getDate() + i).toString();
            //console.log("RRR: " + rr);
            
            if(dd==(new Date().getDate() + i).toString()){
                if(i==1) {
                    tomorrow.push(item.main.temp);
                }
                if(i==2) {
                    dayAfterTomorrow.push(item.main.temp);
                }
                if(i==3) {
                    later.push(item.main.temp);
                }
                if(i==4) {
                    laterTwo.push(item.main.temp);
                }
            }
            
        })
        i = i+1;
        
    }

    console.log("Tomorrow: " + tomorrow);
    
    
    /*
    return (
        
        <ul>
        {list.map(item => (
            <li key={item.dt}>
                {item.dt_txt}</li>
            
        ))}
        </ul>
    ); */


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
                <h6 onClick={() => window.location.reload(false)} className="reloadHead">Click here to search again..</h6>
                <div className="weatherBox container shadow animated fadeInUp">
                    <div className="bg-image"></div>
                    <div className="row">
                        <div className="col">
                            <div className="weatherBoxContent">
                                <h2 className="display-4">{city}</h2>
                                <h6 className="">{date}</h6><br></br>
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
                    <hr></hr>
                    <div className="row futureDataBox">
                        <div className="col">
                            <h6>TOMORROW</h6>
                            <h5 className="display-4">{Math.round(parseFloat(tomorrow[3]) - 273.15) + '\u00b0'}</h5>
                        </div>

                        <div className="col">
                            <h4>{new Date().getDate() + 2}</h4>
                            <h5 className="display-4">{Math.round(parseFloat(dayAfterTomorrow[3]) - 273.15) + '\u00b0'}</h5>
                        </div>

                        <div className="col">
                            <h4>{new Date().getDate() + 3}</h4>
                            <h5 className="display-4">{Math.round(parseFloat(later[3]) - 273.15) + '\u00b0'}</h5>
                        </div>

                        <div className="col">
                            <h4>{new Date().getDate() + 4}</h4>
                            <h5 className="display-4">{Math.round(parseFloat(laterTwo[3]) - 273.15) + '\u00b0'}</h5>
                        </div>
                    </div>
                </div>

                <br></br>
                <Chart  legendPosition="bottom" />

             
                
           </React.Fragment>
        );
    }

export default Weather;