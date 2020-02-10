const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const http = require('http')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://dev-leonardo:vincerehz21@cluster0-1j2wk.mongodb.net/dbDevRadar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)