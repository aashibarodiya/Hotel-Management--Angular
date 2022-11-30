import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { NGXLogger } from "ngx-logger";
import { from, map, Observable, tap } from "rxjs";
import { UserService } from "../../users/services/user.service";
import { Booking, BookingDetails } from "../models/booking";
import { BookingService } from "./booking.service";

const url = "https://localhost:7066/api/bookings";

@Injectable({
    providedIn: "root"
})
export class HttpBookingService implements BookingService {
    constructor(
        private http: HttpClient, private logger: NGXLogger,
        @Inject("UserService") private userService: UserService,
    ) { }


    getAllBookings(): Observable<Booking[]> {
        this.logger.trace("Entering into getAllBookings method of booking service");
        return this.http.get<Booking[]>(url);
    }

    getBookingById(id: number): Observable<Booking> {
        this.logger.info('Entering into getBookingById method of booking service');
        return this
            .http
            .get<Booking>(`${url}/${id}`);
    }

    

    addBooking(booking: BookingDetails): Observable<Booking> {
        this.logger.info('Entering into addBooking method of booking service');
        return this
            .http
            .post<Booking>(url, booking);
    }
    cancelBooking(id: number): Observable<void> {
        this.logger.info('Entering into cancelBooking method of booking service');
        return this
            .http
            .delete<void>(`${url}/${id}`);
    }
    updateBooking(booking: BookingDetails, bookingId: number): Observable<Booking> {
        this.logger.info('Entering into updateBooking method of booking service');
        return this
            .http
            .put<Booking>(`${url}/${bookingId}`, booking);
    }

}