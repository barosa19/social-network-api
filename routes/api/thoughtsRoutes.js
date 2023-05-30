const router = require('express').Router()
const {routerWorks, allThoughts, oneThought, newThought, updateThought, deleteThought} = require('../../controller/thoughtsController')

router.route('/').get(allThoughts).post(newThought)

router.route('/:_id').get(oneThought).put(updateThought).delete(deleteThought)

router.route('/:thoughtId/reactions').post(routerWorks).delete(routerWorks)

module.exports = router