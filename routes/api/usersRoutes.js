const router = require('express').Router()
const {routeWorks, allUsers, newUser} = require('../../controller/usersController')

router.route('/').get(allUsers).post(newUser)

router.route('/:_id').get(routeWorks).put(routeWorks).delete(routeWorks)

router.route('/:userID/friends/:friendId').put(routeWorks).delete(routeWorks)

module.exports = router