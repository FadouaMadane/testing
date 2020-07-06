import {getCorrdinates} from './js/geoData';
import {getImg} from './js/getImg'; 
import {weatherData} from './js/weatherData';

import './styles/style.scss';

const moment = require('moment');

//update UI
const recentData = (data) => {
    let div = document.createElement('div');
    div.classList.add('trip-container');
    document.getElementById('add').appendChild(div);
    div.innerHTML = 
    `<div class="trip" id='img' style="background-image: url('${data.image}');"></div>
    <div class="trip" id='info'>
      <div class="trip" id="to">Your Destination is: <span class="same">${data.city}, ${data.country}</span></div>
      <div class="trip" id="start">Departure Date: <span class="same">${data.start}</span></div>
      <div class="trip" id="end">Return Date: <span class="same">${data.end}</span></div>
      <div class="trip" id="rem">Remaining Days For Your Trip: <span class="same">${data.remainingdays} days</span></div>
      <div class="trip" id="temp">Weather Temperature: <span class="same">${data.temp}°C</span></div>
      <div class="trip" id="des">Weather Forecast: <span class="same">${data.description}</span></div>
    </div>`

    // delete Trips
    document.getElementById('delete').addEventListener('click', (e) => {
      e.preventDefault();
      div.remove();
    });
}

//save Trips
const data= {};

const saveTrips = async (e) => {
  let city = document.getElementById('city').value;
  let depDate = document.getElementById('dep').value;
  let retDate = document.getElementById('ret').value;
  //change data format
  const dateFormat = (date) => {
    const format = moment(date).format('LL');
    return format;
  } 
  //calculate remaining days for start
  const remainingdays = (start, date) => {
    const totalDays = new Date(start).getTime() - new Date().getTime();
    return Math.ceil(totalDays/86400000);
  }

  e.preventDefault();
  data.city = city[0].toUpperCase() + city.slice(1);
  data.getCorrdinates = await getCorrdinates(data.city);
  data.image = await getImg(data.city);
  data.start = dateFormat(depDate);
  data.end = dateFormat(retDate);
  data.remainingdays = remainingdays(data.start, new Date());
  data.lat = data.getCorrdinates.lat;
  data.lon = data.getCorrdinates.lon;
  data.country = data.getCorrdinates.country;
  data.weatherData = await weatherData(data.lat, data.lon);
  data.temp = data.weatherData.data[data.remainingdays].temp;
  data.description = data.weatherData.data[data.remainingdays].weather.description;
  console.log(data);
  recentData(data);
}

document.getElementById('save').addEventListener('click', saveTrips);