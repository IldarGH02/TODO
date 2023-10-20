require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const models = require('./models/model.js')
const cors = require('cors')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js')

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Started on port: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

