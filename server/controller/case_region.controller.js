const case_region_model = require('../models/case_region');


const case_region_controller = {}

case_region_controller.getAllCases = async(req, res) => {
    try
    {
        let cases = await case_region_model.findAll({});

        res.status(200).send(cases);

    }catch(error) {
        res.status(400).send({ 
            message: error
        });
    }
}

module.exports = case_region_controller;