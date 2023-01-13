const mongoose = require('mongoose')

const Schema = mongoose.Schema

const entrySchema = new Schema({
    country: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    datestart: {
        type: Date,
        required: true
    },
    dateend: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('Entry', entrySchema)