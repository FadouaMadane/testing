//get latitude and longitude
export async function getCorrdinates(city) {
  const userName = 'eslam_ezzat'
  const url=`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${userName}`;
  try {
       const res = await fetch(url);
       const location = {};
       const data = await res.json();
       location.lat = data.geonames[0].lat;
       location.lon = data.geonames[0].lng;
       location.country = data.geonames[0].countryName;
       return location;
  } catch(e){
            console.log(e);
  }
}