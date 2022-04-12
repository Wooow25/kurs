const express = require('express')
const cors = require('cors')
const dbOperations = require('./dbFiles/operations')
const {Movie} = require("./dbFiles/classes");


function delay(timeout) {
    return new Promise(() => {
        setTimeout(() => {}, timeout);
    });
}

const API_PORT = process.env.PORT || 5000;
const app = express(); //command to start server

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.post('/createMovie', async (req, res) => {
    console.log('called createMovie')
    await dbOperations.createMovie(req.body)
    const result = await dbOperations.getByName(req.body.namee)
    res.send(result.recordset)
    
})

app.post('/getByName', async (req, res) => {
    console.log('called getByName')
    const result = await dbOperations.getByName(req.body.namee)
    res.send(result.recordset)
    
})


app.get('/getMovie', function(req, res) {
    console.log('called getMovie')
    dbOperations.getMovies().then(resu=>{
        res.send(resu.recordset)
    })
})


 app.listen(API_PORT, () => console.log(`listening on ${API_PORT}`))




