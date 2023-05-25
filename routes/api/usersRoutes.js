const router = require('express').Router()
const {routeWorks} = require('../../controller/usersController')

router.route('/').get(routeWorks).post(routeWorks)

router.route('/:_id').get(routeWorks).put(routeWorks).delete(routeWorks)

router.route('/:userID/friends/:friendId').put(routeWorks).delete(routeWorks)

module.exports = router