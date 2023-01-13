const express = require('express')
const Entry = require('../models/entryModel')
const {
    createEntry,
    getEntrys,
    getEntry,
    deleteEntry,
    updateEntry
} = require('../controllers/entryController')

const router = express.Router()

router.get('/', getEntrys)

router.get('/:id', getEntry)

router.post('/', createEntry)

router.delete('/:id', deleteEntry)

router.patch('/:id', updateEntry)

module.exports = router