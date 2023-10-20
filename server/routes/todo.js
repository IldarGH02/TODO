const Router = require('express')
const router = new Router()
const todoController = require('../controllers/todoController.js')

router.post('/', todoController.create)
router.get('/', todoController.getAll)
router.get('/:id', todoController.getOne)
router.put('/:id', todoController.toggleCompleted)
router.delete('/:id', todoController.removeTodo)

module.exports = router