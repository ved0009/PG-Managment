const commonsdc = require('./database/commonSDC');
const axios = require('axios');



//generate user Id
exports.getState = async () => {
    // console.log(params, "params");
    const result = await commonsdc.getState();
    console.log("state not found" + result.length)
    return result;
};
exports.getDistrict = async (Id) => {
    // console.log(params, "params");
    const result = await commonsdc.getDistrict(Id);
    console.log("state not found" + result.length)
    return result;
};
exports.getCity = async (Id) => {
    // console.log(params, "params");
    const result = await commonsdc.getCity(Id);
    console.log("state not found" + result.length)
    return result;
};
exports.location = async () => {
    // console.log(params, "params");
    return await   axios.get('https://geolocation-db.com/jsonp/')
//   return  await   axios.get('http://ip-api.io/json/');
//   return  await   axios.get('http://ipinfo.io');
        //   .then(response => {
        //     console.log(response.data.explanation);
        //     console.log(response.data);
        //     const data = {
        //         curloc :response.data,
        //         headers:response.headers
        //     }
        //     return data
        //   })
        //   .catch(error => {
        //     console.log(error);
        //     return error
        //   });
};
