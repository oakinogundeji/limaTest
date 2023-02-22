'use strict';
/**
 * Module Dependencies
 */
const
    express = require('express'),
    Router = express.Router(),
    Samples = require('../models/sample');

/**
 * Route to save Data
 */
Router.post('/submit', async (req, res) => {
    const data = req.body.data;
    const NewSampleDoc = new Samples({
        data
    });
    try {
        await NewSampleDoc.save();
        return res.status(200).json({
            msg: 'save success',
            data: NewSampleDoc.data
        });
    }
    catch (err) {
        return res.status(500).json({
            msg: 'there was an error saving the data',
            data: err
        });
    }
});

/**
 * Route to retrieve Data
 */
Router.get('/getData', async (req, res) => {
    try {
        const dataObj = await Samples.findOne({});
        return res.status(200).json({
            msg: 'retrieve success',
            data: dataObj.data
        });
    }
    catch (err) {
        return res.status(500).json({
            msg: 'there was an error retrieveing the data',
            data: err
        });
    }
});
/**
 * Export Router
 */
module.exports = Router;