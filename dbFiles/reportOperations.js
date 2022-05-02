const config = require('./config')
const mssql = require('mssql')

const calculateReport = async(report) => {
    console.log("###")
    console.log(report)
    try{
        let pool = await mssql.connect(config);
        let result = await pool.request().query(`select SUM(sessionAmount) as sessionAmount, SUM(ticketAmount) as ticketAmount, SUM(revenue) as revenue from moviesReport 
            WHERE (datee BETWEEN ${report.period1} and ${report.period2})
            AND contraact=${report.contraact}`)
        console.log(result);
        return(result)
    }
    catch(error){
        console.log(error)
    }
}



module.exports = {
    calculateReport

}