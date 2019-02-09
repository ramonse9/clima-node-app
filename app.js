const lugar = require('./lugar/lugar');
const axios = require('axios');
const fs = require('fs');
const colors = require('colors');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coor = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coor.lat3, coor.lng);

        return `El clima en: ${coor.direccion} es de: ${temp} gracos centigrados`;
    } catch (e) {
        return `No se pudo determinar el clima en el lugar ${direccion}`

    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(`Hubo un error: ${err} `));