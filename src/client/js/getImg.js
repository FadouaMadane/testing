//get image of city
const getImg = async(city) => {
    const imgApi = '17245901-40049b174e4357003f1b869b7'
    const cityUrl = `https://pixabay.com/api/?key=${imgApi}&q=${city}&image_type=photo`
    try {
        let res = await fetch(cityUrl);
        let cityData = await res.json();
        return cityData.hits[1].largeImageURL;
          }
    catch (e) {
        console.log(e);
    }
}

export {getImg}