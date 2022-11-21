import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Booking, BookingDetails } from 'src/app/modules/booking/models/booking';
import { BookingService } from 'src/app/modules/booking/services/booking.service';
import { LoggedInDetails, User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  /*
  * Constructor for User-profile Component
  */
  constructor(
    @Inject("UserService") private userService: UserService,
    private activatedRoute: ActivatedRoute,
    @Inject("BookingService") private bookingService: BookingService,
    private router: Router
  ) { }

  // Declaring details of user, bookings and search-bar
  details?: LoggedInDetails;
  user?: User;
  id: string = '';
  search=''

  userBookings?:Booking[];

  /**
   * This method is called to initializes the component
   */
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.id = params["id"];
    })

    this.userService.getUserByEmail(this.id).subscribe(user => {
      this.user = user;
      console.log(this.user);
      this.userBookings=this.user.userBookings;
    })


  }

  visible: boolean = false;
  updatevisible:boolean=false;
  showPopup() {
    this.visible = true;

  }
  edit(){
    this.updatevisible=true;
  }

  bookingId:number=1;

  /**
   * handlecancel method  
   * @param id invokes cancel method in booking list
   */
  handleCancel(id: number) {
    this.showPopup();
    console.log("cancel clicked");
    console.log(id);
    this.bookingId =id;
  }
  handleEdit(id: number) {
    this.edit();
    this.bookingId=id;
  }


  handleClick(confirmation: boolean) {
    console.log(confirmation);
    if (!confirmation) {
      this.visible = false;
      return;
    }
    
    if(confirmation == true){
       this.bookingService.cancelBooking(this.bookingId).subscribe(()=>{
        console.log("booking cancelled")
        this.userService.getUserByEmail(this.id).subscribe(user => {
          this.user = user;
          console.log(this.user);
          this.userBookings=this.user.userBookings;
        })
      
      }
       )
    }
  }

  updateBooking:BookingDetails={
    userId:'',
    numberOfDaysStay:1
  }

  updateBookings(confirmation:boolean){
    
    if(confirmation){
        this.updateBooking.userId = this.user!.email

        this.bookingService.updateBooking(this.updateBooking,this.bookingId).subscribe(x=>{
          console.log("booking updated" , x);
          this.userService.getUserByEmail(this.id).subscribe(user => {
            this.user = user;
            console.log(this.user);
            this.userBookings=this.user.userBookings;
          }
        )
      });
    }
  }
}
