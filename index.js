const express = require('express')

const app = express();

app.get('/', (  req, res) => {
    res.status(200)
    .json({
        status:'success',
        message:'Welcome to my API'
    })
})

app.listen( 3000, () => {
    console.log('Application running at port 3000')
})


module.exports = app;