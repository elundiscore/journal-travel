const { default: mongoose, Mongoose } = require('mongoose')
const Entry = require('../models/entryModel')

const getEntrys = async (req, res) => {
    const entrys = await Entry.find({}).sort({createdAt: -1})
    res.status(200).json(entrys)
}

const getEntry = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such entry'})
    }
    const entry = await Entry.findById(id)
    if(!entry) {
        return res.status(404).json({error: 'No such entry'})
    }
    res.status(200).json(entry)
}

const createEntry = async (req, res) => {
    const {country, landmark, datestart, dateend, description} = req.body
    try { 
        const entry = await Entry.create({country, landmark, datestart, dateend, description})
        res.status(200).json(entry)
    } catch (error) {
        res.status(400).json({error: 'No such entry'})
    }
}

const deleteEntry = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such entry'})
    }

    const entry = await Entry.findOneAndDelete({_id: id})

    if(!entry) {
        return res.status(404).json({error: 'No such entry'})
    }

    res.status(200).json(entry)
}

const updateEntry = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such entry'})
    }

    const entry = await Entry.findOneAndUpdate({id_: id}, {
        ...req.body
    })

    if (!entry) {
        return res.status(400).json({error: 'No such entry'})
    }

    res.status(200).json(entry)
}

module.exports = {
    getEntrys,
    getEntry,
    createEntry,
    deleteEntry,
    updateEntry,
}