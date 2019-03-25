const express = require('express')
const router = express.Router()
const hoodController = require('../controllers/hoodController')
const venueController = require('../controllers/venueController')

router.get('/hoods', hoodController.index)
router.post('/hoods/', hoodController.create)
router.get('/hoods/:hoodId', hoodController.show)
router.delete('/hoods/:hoodId', hoodController.delete)

router.get('/hoods/:hoodId/venues/:venueId', venueController.show)
router.post('/hoods/:hoodId/venues/' , venueController.create)
router.put('/hoods/:hoodId/venues/:venueId', venueController.update)
router.delete('/hoods/:hoodId/venues/:venueId', venueController.delete)

module.exports = router