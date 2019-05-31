import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header'
import CityButtons from './Component/Button/CityButtons'
import Seoul from './Component/CityList/Seoul'
import Gyeonggi from './Component/CityList/Gyeonggi'
import Daejeon from './Component/CityList/Daejoen'
import Gangwon from './Component/CityList/Gangwon'
import Kyongsang from './Component/CityList/Kyongsang';
const About = () => <div>
    <p>양명우 auddn6676@naver.com</p>
    <p>전승민 zzz845zz@gmail.com</p>
    <p>권현송 kny4950@naver.com</p>
    <p>배재홍</p>
</div>

const RouterApp = () => {

    return (
        <div>
            <Header city/>
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