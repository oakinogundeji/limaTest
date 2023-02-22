'use strict';
/**
 * Module dependencies
 */
const Mongoose = require('mongoose');

/**
 * Define Schema
 */
const SampleSchema = new Mongoose.Schema({
    data: {
        type: String,
        required: true
      }
});

/**
 * Compile Schema to Model
 */
const SampleModel = Mongoose.model('Sample', SampleSchema);

/**
 * Export SampleModel
 */
module.exports = SampleModel;