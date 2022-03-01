const express = require('express')
const cors = require('cors')

require('dotenv').config()

const database = require('./app/database')

const app = express()

const routes = require('./routes')

database.authenticate()
    .then(() => {
        console.log('Connected to MySQL 💚');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3001, () => {
    console.log('Server On 💚')
})