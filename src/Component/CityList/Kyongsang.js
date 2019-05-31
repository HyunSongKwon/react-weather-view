import React from "react";
import GetWeather from "../Weather/GetWeather";
import "./CityName.css";

const Kyongsang = () => {
    return (
        <div class="nav-div">
            <p className="city">Kyongsang</p>
            <br/>
            <GetWeather name = 'Kyŏngsang-namdo'/>
        </div>
    )
}

export default Kyongsang;