const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direción de la ciudad para obtener el clima',
        demmand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {

        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima de ${coors.direccion} es de ${temp}`

    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(msj => console.log(msj))
    .catch(e => console.log(e));