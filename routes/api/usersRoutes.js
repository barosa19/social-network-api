const router = require('express').Router()
const {routeWorks, allUsers, oneUser, newUser, updateUser, deleteUser} = require('../../controller/usersController')

router.route('/').get(allUsers).post(newUser)

router.route('/:_id').get(oneUser).put(updateUser).delete(deleteUser)

router.route('/:userID/friends/:friendId').put(routeWorks).delete(routeWorks)

module.exports = router