const router = require('express').Router()
const {routerWorks, allThoughts, oneThought, newThought} = require('../../controller/thoughtsController')

router.route('/').get(allThoughts).post(newThought)

router.route('/:_id').get(oneThought).put(routerWorks).delete(routerWorks)

router.route('/:thoughtId/reactions').post(routerWorks).delete(routerWorks)

module.exports = router