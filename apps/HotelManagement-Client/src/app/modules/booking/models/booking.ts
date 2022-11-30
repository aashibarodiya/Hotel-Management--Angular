export interface BookingDetails{
    userId:string;
    numberOfDaysStay:number;
}

// Interface define function wrt arguments and their type
export interface Booking{
    id: number;
    roomNo?:string;
    price:string;
    bookingDate:string;
    numberOfDaysStay:number;
    userId:string;
}