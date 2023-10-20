const sequelize = require('../db.js')
const { DataTypes } = require('sequelize')

const TodoList = sequelize.define('todoList', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Todo = sequelize.define('todo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.STRING, allowNull: false},
    completed: {type: DataTypes.BOOLEAN}
})

Todo.hasOne(TodoList)
TodoList.belongsTo(Todo)

module.exports = {
    TodoList,
    Todo
}