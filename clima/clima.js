const axios = require('axios');

const getClima = async(lat, lng) => {
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=1d9126cb2248231a2d932f5105b87c42`);

    if (result.data.cod !== 200) {
        throw new Error(`No se pudo encontrar el clima para lat: ${lat} y lng: ${lng}`);
    }

    return result.data.main.temp;


}

module.exports = {
    getClima
}