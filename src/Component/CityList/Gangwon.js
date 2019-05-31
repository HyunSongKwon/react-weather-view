import React from "react";
import GetWeather from "../Weather/GetWeather";
import "./CityName.css";

const Gangwon = () => {
    return (
        <div class="nav-div">
            <p className="city">Chuncheon</p>
            <br/>
            <GetWeather name = 'Chuncheon'/>
        </div>
    )
}

export default Gangwon;