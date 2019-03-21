const express = require('express')
const router = express.Router()
const hoodController = require('../controllers/hoodController')
const venueController = require('../controllers/venueController')

router.get('/hood', hoodController.index)
// router.get('/hood/new', hoodController.new)
router.post('/hood', hoodController.create)
router.get('/hood/:hoodId', hoodController.show)

module.exports = router