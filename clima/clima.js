const axios = require('axios');

const getClima = async(lat, lng) => {

    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7babe4f93193e35b0416fc816042ef68`)

    return clima.data.main.temp;
}

module.exports = {
    getClima
}