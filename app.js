const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la dirección de la que se desea obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {
    
    try{
        const coords = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp} grados.`;
    } catch (e) {
        return `No se puedo determinar el clima de ${direccion}.`;
    }
    
    
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
