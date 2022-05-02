const config = require('./config')
const mssql = require('mssql')

const calculateReport = async(report) => {
    console.log("###")
    console.log(report)
    console.log(report.contraact) 
    try{
        let pool = await mssql.connect(config);
        let result = await pool.request().query(`select SUM(sessionAmount) as sessionAmount, SUM(ticketAmount) as ticketAmount, SUM(revenue) as revenue from moviesReport 
            WHERE (datee BETWEEN '${report.period1}' and '${report.period2}')
            AND contraact=${report.contraact}`)
        console.log(result);
        return(result)
    }
    catch(error){
        console.log(error)
    }
}

const createReport = async(Report) => {
    try{
        let pool = await mssql.connect(config);
        let reports = await pool.request()
        .query(`insert into reports (contraact, periood, title, creationDate, sessionAmount, ticketAmount, revenue ) values 
        (${Report.contraact},'${Report.periood}','${Report.title}','${Report.creationDate}', ${Report.sessionAmount}, ${Report.ticketAmount},${Report.revenue})`)
        return reports;
    }
    catch(error){
        console.log(error)
    }
}

const getReportByContract = async(id) => {
    try{
        let pool = await mssql.connect(config);
        let reports = await pool.request().query(`select * from reports where contraact=${id}`)
        console.log(reports);
        return(reports)
    } 
    catch(error){
        console.log(error)
    }
}

const getReports = async(page) => {
    try{
        let pool = await mssql.connect(config);
        const step = 15;
        let reports = pool.request().query(`WITH num_row
        AS
        ( SELECT row_number() OVER (ORDER BY id) as nom , * FROM reports)
        
             SELECT * FROM num_row
        WHERE nom>=(${page}-1)*${step} and nom<=${page}*${step} -1 
        `)
        console.log(reports);
        return(reports)
    }
    catch(error){
        console.log(error)
    }
}



module.exports = {
    calculateReport,
    createReport,
    getReportByContract,
    getReports,

}