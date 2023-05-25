const router = require('express').Router()
const {routerWorks} = require('../../controller/thoughtsController')

router.route('/').get(routerWorks).post(routerWorks)

router.route('/:_id').get(routerWorks).put(routerWorks).delete(routerWorks)

router.route('/:thoughtId/reactions').post(routerWorks).delete(routerWorks)

module.exports = router