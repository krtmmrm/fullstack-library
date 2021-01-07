console.log("Hi there!")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
const port = 8081

app.use(morgan('combine'))
app.use(bodyParser.json()) //Allow app to easly parse json files
app.use(cors()) //Allow any client to access (security risk)

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello there!'
    })
})

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`)
})
