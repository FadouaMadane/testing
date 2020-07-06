//get weather information
const weatherData = async(lat, lon) => {
    const weatherApi = '59e34a72b9be49bba10bcb9492fac2e6'
    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${weatherApi}`
    try {
        const res = await fetch(weatherUrl);
        const data = await res.json();
          return data;
      } catch (e) {
        console.log(e);
      }
}

export{weatherData}