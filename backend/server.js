import express from 'express'

import 'dotenv/config'

import mongoConfig from './config.js'

import todoRoutes from './routes/todoRoutes.js'

const app = express()

const port = 8080

app.use('/api/todos', todoRoutes)

app.get('/', (req, res) => {
    res.json('Hello! (from Server)')
})

app.listen(port, () => {
    console.log('Listening on port: ' + port)
    mongoConfig()
})