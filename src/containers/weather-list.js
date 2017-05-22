import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

export class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;

		const temps = cityData.list.map(weather => {
			return weather.main.temp;
		});
		const presure = cityData.list.map(presures => {
			return presures.main.pressure;
		});
		const humidity = cityData.list.map(humidities => {
			return humidities.main.humidity;
		});
		const { lon, lat } = cityData.city.coord;
		console.log(temps);
		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="Kelvin" /></td>
				<td><Chart data={presure} color="black" units="Hpa" /></td>
				<td><Chart data={humidity} color="pink" units="%" /></td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (Hpa)</th>
						<th>Humidity %</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
