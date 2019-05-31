import React from "react";


let API_CITY = 'http://localhost:8080/weather-crawler/current-weathers/by-city-name/'

let img_cloud = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZfSpcC3NxtKD-3I0_wIaF-oebhif8uTZRe5_t70SH1nJGJQt"
let img_windy = "data:image/png;base64,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"
let img_sunny = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYS-qrVm-WooQ-AEx8LKNG4bEwGIJsQB7lnB4CKri5l4h7OrfS"


class GetWeather extends React.Component {
    state = {
        cityInfo : null
    }

    async componentDidMount() {
        // 링크에서 데이터 가져오기, awit : 끝날때까지 기다릴거야
        //let name = this.props.name
        const get_cityInfo = await fetch(API_CITY + this.props.name)
            .then(res => res.json())
            .then(data => data);

        //console.log(city_list);

        // 가져온 데이터를 cities로
        this.setState({
            cityInfo : get_cityInfo
        })
    }

    render() {

        const {cityInfo} = this.state
        if(!cityInfo) {
            return <div> Loading... </div>
        }

        let img_url =img_sunny
        let img_comment = '오늘은 산책하기 좋아요'
        if(cityInfo.clouds.all > 15 && cityInfo.main.humidity > 45) {
            img_comment = '오늘은 구름이 많아요'
            img_url = img_cloud
        } else if (cityInfo.wind.speed>3) {
            img_comment = '오늘은 바람이 세요'
            img_url = img_windy
        }

        return (
            <div>

                {img_comment}
                <br/>
                <br/>
                <img src= {img_url} />

                <br/>
                wind: {cityInfo.wind.speed},
                <br/>
                humidi: {cityInfo.main.humidity}
                <br/>
                pressure: {cityInfo.main.pressure}
                <br/>
                <br/>
                temp: {cityInfo.main.temp}
                <br/>
                temp_max : {cityInfo.main.temp_max}
                <br/>
                temp_min : {cityInfo.main.temp_min}
                <br/>
                <br/>
                clouds : {cityInfo.clouds.all}
                <br/>
                sunrise: {cityInfo.sys.sunrise}
                <br/>
                sunset: {cityInfo.sys.sunset}
            </div>
        )
    }
}

export default GetWeather;
