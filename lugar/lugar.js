const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let location = undefined;

    try {
        let mapData = await require('../db/data.json');

        //console.log(JSON.stringify(mapData, undefined, 2));

        if (mapData.status === 'ZERO_RESULTS') {
            throw new Error('No hay resultados para la ciudad');
        }
        location = mapData.results[0];

        //let encodeURL = encodeURI(argv.direccion);
        //axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM`)
        //    .then(resp => {
        //        console.log(resp.data);
        //    })
        //    .catch(e => console.log('ERROR!!!', e));

        //console.log("Direccion".green);
        //console.log(location["formatted_address"]);
        //console.log(location.formatted_address);
        //console.log("Longitud".green);
        //console.log(location["geometry"]["location"]["lat"]);
        //console.log(location.geometry.location.lat);
        //console.log("Latitud".green);
        //console.log(location["geometry"]["location"]["lng"]);
        //console.log(location.geometry.location.lng);

    } catch (err) {
        console.log("Error: ", err)
    }

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }
}

module.exports = {
    getLugarLatLng
}