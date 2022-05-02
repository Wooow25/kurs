const express = require('express')
const cors = require('cors')
const dbMovieOperations = require('./dbFiles/movieOperations')
const dbReportOperations = require('./dbFiles/reportOperations')
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
    await dbMovieOperations.createMovie(req.body)
    const result = await dbMovieOperations.getMovieByName(req.body.namee)
    res.send(result.recordset)
    
})

app.post('/getMovieByName', async (req, res) => {
    console.log('called getMovieByName');
    const result = await dbMovieOperations.getMovieByName(req.body.namee)
    res.send(result.recordset)
    
})

app.post('/getMovieById', async (req, res) => {
    console.log('called getMovieByName');
    const result = await dbMovieOperations.getMovieById(req.body.id)
    res.send(result.recordset)
    
})


app.post('/getMovies', async (req, res) =>{
    console.log('called getMovie');
    console.log(req.body.page);
    const result =  await dbMovieOperations.getMovies(req.body.page)
    res.send(result.recordset)
})

app.post('/updateMovie', async (req, res) => {
    console.log('called updateMovie')
    console.log(req.body)
    await dbMovieOperations.updateMovie(req.body)
    const result = await dbMovieOperations.getMovieById(req.body.id)
    res.send(result.recordset[0])
})


app.post('/deleteMovie', async (req, res) => {
    console.log('called deleteMovie')
    console.log(req.body.id)
    await dbMovieOperations.deleteMovie(req.body.id)
    const result =  await dbMovieOperations.getMovies(1)
    console.log('###: called getdata')
    res.send(result.recordset)
})

app.post('/getContractByMovie', async (req, res) => {
    console.log('called getContractByMovie')
    console.log(req.body.id)
    const result = await dbMovieOperations.getContractByMovie(req.body.id)
    if (result.recordset.length ===0){
        res.send({id:'Отсутствует'})

    }
    res.send(result.recordset[0])
})


app.post('/calculateReport', async (req, res) => {
    console.log('called calculateReport');
    const result = await dbReportOperations.calculateReport(req.body.report)
    
    console.log(result);
    res.send(result.recordset)
    rs
})






 app.listen(API_PORT, () => console.log(`listening on ${API_PORT}`))




