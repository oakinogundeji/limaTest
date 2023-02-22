'use strict';
/**
 * Module Dependencies
 */
const
    express = require('express'),
    Router = express.Router(),
    DataObjects = require('../models/dataObjects');

/**
 * Route to save Data
 */
Router.post('/saveData', async (req, res) => {
    const data = req.body;
    if(!data.id) {
        return res.status(404).json({
            msg: 'there was an error saving the data, please ensure that the "id" attribute is present. Thank you'
        });

    }
    const dataProps = Object.keys(data);
    const NewDataObjectDoc = new DataObjects({});
    dataProps.forEach(val => {
        NewDataObjectDoc[val] = data[val];
    });

    try {
        await NewDataObjectDoc.save();
        return res.status(200).json({
            msg: 'save success',
            data: NewDataObjectDoc.id
        });
    }
    catch (err) {
        console.log('err saving data', err);
        return res.status(404).json({
            msg: 'there was an error saving the data, please ensure all field values are of the correct data type, or ensure that the "id" attribute is unique. Thank you',
            data: err
        });
    }
});

/**
 * Route to retrieve Data
 */
Router.get('/getData', async (req, res) => {
    const objID = req.query.id;
    try {
        const dataObj = await DataObjects.findOne({id: objID}, {_id: 0, __v: 0});
        if(!dataObj) {
            return res.status(404).json({
                msg: `data with id: ${objID} does NOT exist, please confirm the correct ID. Thank you.`,
                data: dataObj
            })

        }
        return res.status(200).json({
            msg: 'retrieve success',
            data: dataObj
        });
    }
    catch (err) {
        return res.status(500).json({
            msg: 'there was an internal server error retrieving the data, please try again later or contact the service provider. THank you',
            data: err
        });
    }
});
/**
 * Export Router
 */
module.exports = Router;