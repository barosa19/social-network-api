const router = require('express').Router()
const {routeWorks, allUsers, oneUser, newUser, updateUser, deleteUser, newFriend, deleteFriend} = require('../../controller/usersController')

router.route('/').get(allUsers).post(newUser)

router.route('/:_id').get(oneUser).put(updateUser).delete(deleteUser)

router.route('/:userId/friends/:friendId').post(newFriend).delete(deleteFriend)

module.exports = router