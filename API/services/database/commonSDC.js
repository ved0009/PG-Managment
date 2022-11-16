const mcities = require("../../model/city.model")
const mdistrict = require("../../model/district.model")
const mstate = require("../../model/state.model")



exports.getState = async () => {
    try {
        // console.log(data);
        let emailfound = await mstate.find({}).sort({'StateId':1});
        return emailfound;
    } catch (e) {
        throw new Error('Unable to find state: ' + e.message)
    }
};
exports.getDistrict = async (Id) => {
    try {
        // console.log(data);
        let emailfound = await mdistrict.find({stateid:Id}).sort({'DistrictName':1});
        return emailfound;
    } catch (e) {
        throw new Error('Unable to find state: ' + e.message)
    }
};
exports.getCity = async (Id) => {
    try {
        // console.log(data);
        let emailfound = await mcities.find({Districtid:Id}).sort({'CityName':1});
        return emailfound;
    } catch (e) {
        throw new Error('Unable to find state: ' + e.message)
    }
};
