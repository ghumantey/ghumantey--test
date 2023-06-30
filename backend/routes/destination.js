const express= require('express');
const router = express.Router();
const {getAllDestinations, createDestination, getSingleDestinations, deleteDestination} = require('../controllers/destination')
const {postDestination} = require('../controllers/post');

router.route('/').get(getAllDestinations).post(createDestination);
router.route('/:id').get(getSingleDestinations).delete(deleteDestination);
router.route('/post').post(postDestination)

module.exports = router;