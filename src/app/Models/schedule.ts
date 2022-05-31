export class Schedule {
    Id: number
    AirlineId: number = 1
    FlightNumber: string
    FlightName: string
    FromPlace: string
    ToPlace: string
    StartDateTime:any
    EndDateTime: any
    ScheduledDays: string = "M"
    InstrumentUsed: string
    TotNumBuisSeat: number
    TotNumNonbuisSeat: number
    TicketCost: number
    NumberOfRows: number
    Meal: string = "O"
    ChooseWay: string = "O"
}

export class Schedule1 {
    id: number
    airlineId: number = 1
    flightNumber: string
    flightName: string
    fromPlace: string
    toPlace: string
    startDateTime: string
    endDateTime: string
    scheduledDays: string = "M"
    instrumentUsed: string
    totNumBuisSeat: number
    totNumNonbuisSeat: number
    ticketCost: number
    numberOfRows: number
    meal: string = "O"
    chooseWay: string = "O"
}
