import React from "react";
import GetWeather from "../Weather/GetWeather";
import "./CityName.css";

const Seoul = () => {
    return (
        <div class="nav-div">
            <p className="city">Seoul</p>
            <br/>
            <GetWeather name = 'Seoul'/>
        </div>
    )
}

export default Seoul;



