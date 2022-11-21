export interface BookingDetails{
    userId:string;
    numberOfDaysStay:number;
}

export interface Booking{
    id: number;
    roomNo?:string;
    price:string;
    bookingDate:string;
    numberOfDaysStay:number;
    userId:string;
}