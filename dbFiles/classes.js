export class Movie{
    constructor(id, age, genre, duration, namee, unpackKey) {
        this.id = id,
            this.age = age,
            this.genre = genre,
            this.duration = duration,
            this.namee = namee,
            this.unpackKey = unpackKey
    }
}

export class Report{
    constructor(id, contraact, period, creationDate, title, sessionAmount, ticketAmount, revenue) {
        this.id = id,
            this.contraact = contraact,
            this.period = period,
            this.creationDate = creationDate,
            this.title = title
        this.sessionAmount = sessionAmount,
            this.ticketAmount = ticketAmount,
            this.revenue = revenue
    }
}


export class Contract{
    constructor(id, movie, disttributor, memorandumAmount, statee, deliveryType) {
        this.id = id,
            this.movie = movie,
            this.disttributor = disttributor,
            this.memorandumAmount = memorandumAmount,
            this.statee = statee
        this.deliveryType = deliveryType,
    }
}


export class Commitment{
    constructor(id, contraact, deadline, statee, statemeent, fine, responsible) {
        this.id = id,
            this.contraact = contraact,
            this.deadline = deadline,
            this.statee = statee,
            this.statemeent = statemeent
        this.fine = fine,
            this.responsible = responsible
    }
}


export class MoviesReport{
    constructor(id, contraact, datee, sessionAmount, ticketAmount, revenue) {
        this.id = id,
            this.contraact = contraact,
            this.datee = datee,
            this.sessionAmount = sessionAmount,
            this.ticketAmount = ticketAmount,
            this.revenue = revenue
    }
}


export class Certificatee{
    constructor(id, contraact, fileNamee) {
        this.id = id,
            this.contraact = contraact,
            this.fileNamee = fileNamee,
    }
}


export class Distributor{
    constructor(id, namee, adress, phone, email) {
        this.id = id,
            this.namee = namee,
            this.adress = adress,
            this.phone = phone,
            this.email = email,
    }
}