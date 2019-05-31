import React from "react";
import GetWeather from "../Weather/GetWeather";
import "./CityName.css";

const Gyeonggi = () => {
    return (
        <div class="nav-div">
            <p className="city">Gyeonggi</p>
            <br/>
            <GetWeather name = 'Gyeonggi-do'/>
        </div>
    )
}

export default Gyeonggi;