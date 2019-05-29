import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header'
import CityButtons from './Component/Button/CityButtons'
import Seoul from './Component/CityList/Seoul'
import Gyeonggi from './Component/CityList/Gyeonggi'
import Daejeon from './Component/CityList/Daejoen'
import Gangwon from './Component/CityList/Gangwon'
import Kyongsang from './Component/CityList/Kyongsang';
const About = () => <div>About</div>

const RouterApp = () => {
    const city ="Deajeon";

    return (
        <div>
            <Header city = { city } />
            <Route exact path="/" component={CityButtons}/>
            <Route path="/about" component={About}/>
            <Route path="/seoul" component={Seoul}/>
            <Route path="/gyeonggi" component={Gyeonggi}/>
            <Route path="/daejeon" component={Daejeon}/>
            <Route path="/Gangwon" component={Gangwon}/>
            <Route path="/kyongsang" component={Kyongsang}/>
        </div>
    )
}

export default RouterApp