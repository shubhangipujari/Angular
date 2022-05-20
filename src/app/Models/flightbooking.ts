export class Flightbooking {
    Id: number
    ScheduedId: number
    UserId: number
    MealPreferene: string
    Cost: number
    SeatNumber: number
    PnrNumber: string="pnr"
    IsCanceled: number=0
    CreatedModifiedDate:string
}
export class Flightbooking1 {
    id: number
    scheduedId: number
    userId: number
    mealPreferene: string
    cost: number
    seatNumber: number
    pnrNumber: string="pnr"
    isCanceled: number=0
    createdModifiedDate:string
}

export class Flightbooking2 {
    id: number
    scheduedId: number
    userId: number
    mealPreferene: string
    cost: number
    seatNumber: number
    pnrNumber: string="pnr"
    isCanceled: number
    createdModifiedDate:string
    flightName:string
    flightNumber:string
    fromPlace:string
    toPlace:string
    startDateTime:string
    endDateTime:string
}