import React from "react";
import GetWeather from "../Weather/GetWeather";
import "./CityName.css";

const Daejoen = () => {
    return (
        <div class="nav-div ">
            <p class="city">Daejeon</p>
            <br/>
            <GetWeather name = 'Daejeon'/>
        </div>
    )
}

export default Daejoen;