import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../users/services/user.service';
import { BookingDetails } from '../../models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css'],
})
/**
 * OnInit:the method is called to initializes the component.
 * OnDestroy: It is called for cleanup logic when a component, 
 * directive, pipe or service is destroyed
 */
export class RoomBookingComponent implements OnInit, OnDestroy {
  

  constructor(
    @Inject('UserService') private userService: UserService,
    @Inject('BookingService') private bookingService: BookingService,
    private router: Router,
  ) {
    
  }

  user?: any;

  booking: BookingDetails = {
    userId: '',
    numberOfDaysStay: 1,
  };

  // Updates the user details
  updateUserStatus(details: any): void {
    if (details) this.user = details.user;
    else this.user = undefined;
  }

  subsciption: any;
  ngOnInit(): void {
    console.log('getting logged in user details');
    var details = this.userService.getLoggedInUser();
    if (details) this.user = details.user;
    this.subsciption = this.userService
      .getUserStatusAnnouncement()
      .subscribe((details) => this.updateUserStatus(details));
  }
   // Called to unsubscribe from any RxJS Observables
  ngOnDestroy(): void {
    
    this.subsciption.unsubscribe();
  }

  /**
   * Id and email are taken from user for booking room
   * room is booked
   */
  bookRoom() {
    
    console.log('room booked');
    console.log(this.booking);
    this.booking.userId = this.user.email;
    this.bookingService
      .addBooking(this.booking)
      .subscribe((x) => console.log(x));

      this.router.navigate(['user/profile',this.user.email]);
  }

}
