// apikey e89c9c6f73c81a5c7fed0614174963f5

const axios = require('axios');

const getClima = async(lat, lng) => {
    
    const resp = await axios.get(`htpps://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e89c9c6f73c81a5c7fed0614174963f5&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}