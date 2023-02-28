const express = require('express')

const app = express();

app.get('/', (  req, res) => {
    res.status(200)
    .json({
        status:'success',
        message:'Welcome to my API'
    })
})

app.get('/me', ( req, res ) => {
    res.status(200)
    .json({
        status: 'success',
        message: 'This a route handler'
    })
})

app.get('/test', ( req, res) => {
    res.status(200)
    .json({
        status: 'success',
        message: 'testing the API'
    })
} )

app.listen( 3000, () => {
    console.log('Application running at port 3000')
})


module.exports = app;