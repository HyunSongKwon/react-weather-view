import React from 'react';
import "./CityButtons.css";
import { Link, NavLink } from "react-router-dom";
const CityButtons = () => {
    return (
        <div class="buttons">
            <div>
                <Link to="/seoul" class="myButton">서울</Link>
            </div>
            <div>
                <Link to="/gyeonggi" class="myButton">경기도</Link>
            </div>
            <div>
                <Link to="/daejeon" class="myButton">대전</Link>
            </div>
            <div>
                <Link to="/Gangwon" class="myButton">강원도</Link>
            </div>
            <div>
                <Link to="/kyongsang" class="myButton">경상도</Link>
            </div>
        </div>
    )
}

export default CityButtons;