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
    const result = await dbOperations.getMovieByName(req.body.namee)
    res.send(result.recordset)
    
})

app.post('/getMovieByName', async (req, res) => {
    console.log('called getMovieByName');
    const result = await dbOperations.getMovieByName(req.body.namee)
    res.send(result.recordset)
    
})

app.post('/getMovieById', async (req, res) => {
    console.log('called getMovieByName');
    const result = await dbOperations.getMovieById(req.body.id)
    res.send(result.recordset)
    
})


app.post('/getMovies', async (req, res) =>{
    console.log('called getMovie');
    console.log(req.body.page);
    const result =  await dbOperations.getMovies(req.body.page)
    res.send(result.recordset)
})

app.post('/updateMovie', async (req, res) => {
    console.log('called updateMovie')
    console.log(req.body)
    await dbOperations.updateMovie(req.body)
    const result = await dbOperations.getMovieById(req.body.id)
    res.send(result.recordset[0])
})


app.post('/deleteMovie', async (req, res) => {
    console.log('called deleteMovie')
    console.log(req.body.id)
    await dbOperations.deleteMovie(req.body.id)
    const result =  await dbOperations.getMovies(1)
    console.log('###: called getdata')
    res.send(result.recordset)
})

 app.listen(API_PORT, () => console.log(`listening on ${API_PORT}`))




