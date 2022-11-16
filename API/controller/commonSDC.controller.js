 
const { json } = require('body-parser');
const sdc = require('../services/commonSDC.service');
const commonSDCController = {};


 

//allUser
commonSDCController.state = async (req, res) => {
    try {

        const result = await sdc.getState();
        if (result.length >= 1) {
            const model = {
                message: "Successfully",
                success: true,
                totalRecord: result.length,
                responseData: result
            }
            res.send(model);
        } else {
            const model = {
                message: "no record found",
                success: false,
                totalRecord: result.length,
                responseData: ""
            }
            res.send(model);
        }

    } catch (e) {
        throw new Error('Unable to fetch all  user: ' + e.message)
    }
}
commonSDCController.district = async (req, res) => {
    try {
        let Id = req.params.Id;
        console.log("this is id",Id)
        const result = await sdc.getDistrict(Id);
        if (result.length >= 1) {
            const model = {
                message: "Successfully",
                success: true,
                totalRecord: result.length,
                responseData: result
            }
            res.send(model);
        } else {
            const model = {
                message: "no record found",
                success: false,
                totalRecord: result.length,
                responseData: ""
            }
            res.send(model);
        }

    } catch (e) {
        throw new Error('Unable to fetch all  user: ' + e.message)
    }
}
commonSDCController.city = async (req, res) => {
    try {
        let Id = req.params.Id;
        const result = await sdc.getCity(Id);
        if (result.length >= 1) {
            const model = {
                message: "Successfully",
                success: true,
                totalRecord: result.length,
                responseData: result
            }
            res.send(model);
        } else {
            const model = {
                message: "no record found",
                success: false,
                totalRecord: result.length,
                responseData: ""
            }
            res.send(model);
        }

    } catch (e) {
        throw new Error('Unable to fetch all  user: ' + e.message)
    }
}
commonSDCController.CurrentLocation = async (req, res) => {
    try {
        const result =  await sdc.location();
        if (result.data != null) {
            await sdc.savedummylocation(result.data);
            const model = {
                message: "Successfully",
                success: true,
                responseData: result.data,
               
            }
            res.send(model);
        } else {
            const model = {
                message: "API ERROR",
                success: false,
                responseData:result
            }
            res.send(model);
        }

    } catch (e) {
        throw new Error('Unable to fetch all  user: ' + e.message)
    }
}




module.exports = commonSDCController