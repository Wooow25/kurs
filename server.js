const express = require('express')
const cors = require('cors')
const dbOperations = require('./dbFiles/operations')

// const API_PORT = process.env.PORT || 5000;
// const app = express(); //command to start server
//
// app.use(cors());
//
//
// app.get('/api', function(req, res) {
//     console.log('called hello')
//     res.send({result:'Hello!'})
// })
//
//
// app.get('/quit', function(req, res) {
//     console.log('called quit')
//     res.send({result:'Bye!!'})
// })
//
//
// app.listen(API_PORT, () => console.log(`listening on ${API_PORT}`))

dbOperations.getMovies().then(res=>{
    console.log(res.recordset)
})