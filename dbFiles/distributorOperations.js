const config = require('./config')
const mssql = require('mssql')

const findActiveContracts = async(id) => {
    console.log(id)
    try{
        let pool = await mssql.connect(config);
        let result = await pool.request().query(`select id from contraact where distributor=${id}`)
        console.log(result);
        return(result)
    }
    catch(error){
        console.log(error)
    }
}

const createDistributor = async(Distributor) => {
    try{
        let pool = await mssql.connect(config);
        let distributors = await pool.request()
        .query(`insert into distributor (namee, adress, phone, email) values 
        ('${Distributor.namee}','${Distributor.adress}','${Distributor.phone}', '${Distributor.email}')`)
        return distributors;
    }
    catch(error){
        console.log(error)
    }
}

const getDistributorByName = async(name) => {
    try{
        let pool = await mssql.connect(config);
        let distributors = await pool.request().query(`select * from distributor where namee LIKE '%${name}%'`)
        console.log(distributors);
        return(distributors)
    } 
    catch(error){
        console.log(error)
    }
}

const getDistributors = async(page) => {
    try{
        let pool = await mssql.connect(config);
        const step = 15;
        let distributors = pool.request().query(`WITH num_row
        AS
        ( SELECT row_number() OVER (ORDER BY id) as nom , * FROM distributor)
        
             SELECT * FROM num_row
        WHERE nom>=(${page}-1)*${step} and nom<=${page}*${step} -1 
        `)
        console.log(distributors);
        return(distributors)
    }
    catch(error){
        console.log(error)
    }
}

const updateDistributor = async(Distributor) => {
    try{
        let pool = await mssql.connect(config);
        let distributors = await pool.request()
        .query(`update distributor set namee='${Distributor.namee}', adress='${Distributor.adress}', phone='${Distributor.phone}', email='${Distributor.email}'
        where id=${Distributor.id}`)
        return distributors;
    }
    catch(error){
        console.log(error)
    }
}

const deleteDistributor = async(id) => {
    try{
        let pool = await mssql.connect(config);
        let movies = await pool.request()
        .query(`delete from distributor where id=${id}`)
        return movies;
    }
    catch(error){
        console.log(error)
    }
}



module.exports = {
    findActiveContracts,
    createDistributor,
    getDistributorByName,
    getDistributors,
    updateDistributor,
    deleteDistributor
}