const config = require('./config')
const mssql = require('mssql')

const getMovies = async(page) => {
    try{
        let pool = await mssql.connect(config);
        const step = 4;
        let movies = pool.request().query(`WITH num_row
        AS
        ( SELECT row_number() OVER (ORDER BY id) as nom , * FROM movie)
        
             SELECT * FROM num_row
        WHERE nom>=(${page}-1)*${step} and nom<=${page}*${step} -1 
        `)
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
        let movies = await pool.request().query(`select * from movie where namee LIKE '%${movieName}%'`)
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
        let movies = await pool.request()
        .query(`delete from movie where id=${id}`)
        return movies;
    }
    catch(error){
        console.log(error)
    }
}


const getContractByMovie = async(id) => {
    try{
        let pool = await mssql.connect(config);
        let contractId = await pool.request()
        .query(`select id from contraact where movie=${id}`)
        return contractId;
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
    deleteMovie,
    getContractByMovie,

}