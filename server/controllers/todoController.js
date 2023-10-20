const { Todo } = require('../models/model')
const ApiError = require('../error/ApiError')
const db = require('../db.js')

class TodoController {
    async create(req, res, next) {
        try {
            const {
                title,
                text,
                date,
                completed
            } = req.body

            const type = await Todo.create({
                title,
                text,
                date,
                completed
            })
            return res.json(type)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const todo = await Todo.findAll()
        return res.json(todo)
    }

    async getOne(req, res) {
        const { id } = req.params
        const todo = await Todo.findOne({
            where: {id}
        })
        return res.json(todo)
    }

    async toggleCompleted(req, res) {
        const { id, completed } = req.body
        console.log(req.body)
        const todo = await db.query(`UPDATE todos set completed = $1, where id = ${id} RETURNING *`)
        res.json(todo)
    }

    async removeTodo(req, res) {
        const { id } = req.params
        const todo = await db.query(`DELETE FROM todos where id = ${id}`)
        res.json(todo)
    }
}

module.exports = new TodoController()