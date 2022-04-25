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

const getMovieByName = async(movieName) => {
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


const getMovieById = async(id) => {
    try{
        let pool = await mssql.connect(config);
        let movies = await pool.request().query(`select * from movie where id='${id}'`)
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

const updateMovie = async(Movie) => {
    try{
        let pool = await mssql.connect(config);
        let movies = await pool.request()
        .query(`update movie set age=${Movie.age}, genre='${Movie.genre}', duration=${Movie.duration}, namee='${Movie.namee}', unpackKey='${Movie.unpackKey}'
         where id=${Movie.id}`)
        return movies;
    }
    catch(error){
        console.log(error)
    }
}

const deleteMovie = async(id) => {
    try{
        let pool = await mssql.connect(config);
        console.log('procesing...')
        let movies = await pool.request()
        .query(`delete from movie where id=${id}`)
        return movies;
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    createMovie,
    getMovies,
    getMovieByName,
    getMovieById,
    updateMovie,
    deleteMovie
}