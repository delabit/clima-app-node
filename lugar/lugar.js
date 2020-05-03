const axios = require('axios');


const getLugarLatLng = async(dir) => {
    
    const encodeDir = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeDir}`,
        timeout: 1000,
        headers: {
            'x-rapidapi-key':'40c1f2a38amsh06a27eff0a9bc51p1ae6b3jsnae3cb966b1f4',
        }
    });
    
    const resp = await instance.get(); 

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}` );
    }

    let data        = resp.data.Results[0];
    let direccion   = data.name;
    let lat         = data.lat;
    let lng         = data.lon;
    
    return {
        direccion,
        lat,
        lng
    }
    
}

module.exports = {
    getLugarLatLng
}
