import { Pipe, PipeTransform } from '@angular/core';

import { Booking } from '../../booking/models/booking';


// Created pipe class
@Pipe({

  name: 'search'

})
export class SearchPipe implements PipeTransform {
  transform(bookings: Booking[]|undefined,search:string, ...args: unknown[]): Booking[] {
   return bookings!.filter(booking=>booking.bookingDate.includes(search));
  }
}