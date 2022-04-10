class Movie{
    id;
    constructor( age, genre, duration, namee, unpackKey) {
            this.age = age,
            this.genre = genre,
            this.duration = duration,
            this.namee = namee,
            this.unpackKey = unpackKey
    }
}

class Report{
    id;
    constructor( contraact, period, creationDate, title, sessionAmount, ticketAmount, revenue) {
        
            this.contraact = contraact,
            this.period = period,
            this.creationDate = creationDate,
            this.title = title
        this.sessionAmount = sessionAmount,
            this.ticketAmount = ticketAmount,
            this.revenue = revenue
    }
}


class Contract{
    id;
    constructor( movie, disttributor, memorandumAmount, statee, deliveryType) {
        
            this.movie = movie,
            this.disttributor = disttributor,
            this.memorandumAmount = memorandumAmount,
            this.statee = statee
        this.deliveryType = deliveryType
    }
}


class Commitment{
    id;
    constructor( contraact, deadline, statee, statemeent, fine, responsible) {
        
            this.contraact = contraact,
            this.deadline = deadline,
            this.statee = statee,
            this.statemeent = statemeent
        this.fine = fine,
            this.responsible = responsible
    }
}


class MoviesReport{
    id;
    constructor( contraact, datee, sessionAmount, ticketAmount, revenue) {
        
            this.contraact = contraact,
            this.datee = datee,
            this.sessionAmount = sessionAmount,
            this.ticketAmount = ticketAmount,
            this.revenue = revenue
    }
}


class Certificatee{
    id;
    constructor(contraact, fileNamee) {
        
            this.contraact = contraact,
            this.fileNamee = fileNamee
    }
}


class Distributor{
    id;
    constructor( namee, adress, phone, email) {
        
            this.namee = namee,
            this.adress = adress,
            this.phone = phone,
            this.email = email
    }
}

module.exports ={
    Distributor,
    Certificatee,
    MoviesReport,
    Commitment,
    Contract,
    Report,
    Movie
}