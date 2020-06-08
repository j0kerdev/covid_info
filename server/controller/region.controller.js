const region_model = require('../models/region');

const region_controller = {};


region_controller.getAllRegion = async(req, res) => {
    try
    {
        let regions = await region_model.findAll({});

        res.status(200).send(regions);

    }catch(error) {
        res.status(400).send({ 
            message: error
        });
    }
}

region_controller.getAllRegionByCountry = async(req, res) => {
    try
    {
        let regions = await region_model.findAll({
            where: {
                countryId: req.params.id
            }
        });

        res.status(200).send(regions);

    }catch(error) {
        res.status(400).send({ 
            message: error
        });
    }
}


module.exports = region_controller;