const commonsdc = require("./database/commonSDC");
const axios = require("axios");

//generate user Id
exports.getState = async () => {
  // console.log(params, "params");
  const result = await commonsdc.getState();
  console.log("state not found" + result.length);
  return result;
};
exports.getDistrict = async (Id) => {
  // console.log(params, "params");
  const result = await commonsdc.getDistrict(Id);
  console.log("state not found" + result.length);
  return result;
};
exports.getCity = async (Id) => {
  // console.log(params, "params");
  const result = await commonsdc.getCity(Id);
  console.log("state not found" + result.length);
  return result;
};
exports.location = async () => {
  // console.log(params, "params");
  const data = await axios.get("https://geolocation-db.com/json/");
  return data;
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
exports.savedummylocation = async (data) => {

  let datad = ({
    postal:data.postal,
    country_code: data.country_code,
    country_name: data.country_name,
    city: data.city,
    state: data.state,
    latitude: data.latitude,
    longitude: data.longitude,
    IPv4:data.IPv4
    
})
  return await commonsdc.dummylocation(datad);
  
};
