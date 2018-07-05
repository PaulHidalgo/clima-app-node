const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCQrScN0S4fnT09ehmH20bNh2HSArj2Ik8`);
    if (result.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad: ${direccion}`);
    }

    let location = result.data.results[0];
    let cords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: cords.lat,
        lng: cords.lng
    }

}

module.exports = {
    getLugarLatLng
}