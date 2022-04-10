const config = require('./config')
const mssql = require('mssql')

const getMovies = async() => {
    try{
        let pool = await mssql.connect(config);
        let movies = pool.request().query("select * from movie")
        console.log(movies);
        return(movies)
    }
    catch(error){
        console.log(error)
    }
}

const createMovie = async(Movie) => {
    try{
        let pool = await mssql.connect(config);
        
    let movies = pool.request().query(`insert into movie values (${Movie.age},'${Movie.genre}',${Movie.duration},'${Movie.namee}','${Movie.unpackKey}')`)
        console.log(movies);
        return(movies)
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    createMovie,
    getMovies,
}