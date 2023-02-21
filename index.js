const express = require('express')

const app = express();

app.get('/', (  req, res) => {
    res.status(200)
    .json({
        status:'success',
        message:'Welcome to my API'
    })
})


module.exports = app;