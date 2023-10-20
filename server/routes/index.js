const Router = require('express')
const router = new Router()

const todosRouter = require('./todo')

router.use('/todos', todosRouter)

module.exports = router