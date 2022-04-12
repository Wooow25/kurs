const config = require('./config')
const mssql = require('mssql')

const getMovies = async() => {
    try{
        let pool = await mssql.connect(config);
        let movies = pool.request().query(`select * from movie `)
        console.log(movies);
        return(movies)
    }
    catch(error){
        console.log(error)
    }
}

const getByName = async(movieName) => {
    try{
        let pool = await mssql.connect(config);
        let movies = await pool.request().query(`select * from movie where namee='${movieName}'`)
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
        let movies = await pool.request()
        .query(`insert into movie (age, genre, duration, namee, unpackKey) values 
        (${Movie.age},'${Movie.genre}',${Movie.duration},'${Movie.namee}', '${Movie.unpackKey}')`)
        return movies;
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    createMovie,
    getMovies,
    getByName,
}