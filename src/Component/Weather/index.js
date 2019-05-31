import React from 'react';


const API_CITES = "http://localhost:8080/available-cities";

class Weather extends React.Component{
    state = {
        cities : null
    };

    async componentDidMount() {


        const city_list = await fetch(API_CITES)
            .then(res => res.json())
            .then(data => data);
        console.log('CMD!')

        this.setState({
            cities: city_list
        });
    }
    render() {
        const {cities} = this.state;

        if(!cities){
            return <div>Loading....</div>
        }
        return (
          <div>
              <ul>
                  {cities.map(item => (
                      <li key={item}>
                          {item}
                      </li>
                  ))}
              </ul>
          </div>
        );
    }
}

export default Weather;