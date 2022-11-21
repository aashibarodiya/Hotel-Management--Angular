import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { HttpUserService } from 'src/app/modules/users/services/http-user-service';
import { UserService } from 'src/app/modules/users/services/user.service';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';
import { HttpBookingService } from '../../services/http-booking-service';

import { RoomBookingComponent } from './room-booking.component';


describe('RoomBookingComponent', () => {
  let component: RoomBookingComponent;
  let fixture: ComponentFixture<RoomBookingComponent>;
  // let bookingServiceSpy: jasmine.SpyObj<BookingService>
  // let userServiceSpy:jasmine.SpyObj<UserService>;

  beforeEach(async () => {
//     bookingServiceSpy = jasmine.createSpyObj('BookingService',['addBooking'])
// userServiceSpy=jasmine.createSpyObj('UserService',['getUserStatusAnnouncement','getLoggedInUser'])
    await TestBed.configureTestingModule({
      declarations: [ RoomBookingComponent ],
      imports:[HttpClientModule,FormsModule,LoggerTestingModule],
      providers:[{provide:"BookingService",useClass:HttpBookingService},
      {provide:"UserService",useClass:HttpUserService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('should update user status',()=>{
    component.updateUserStatus(true);
    expect(component.updateUserStatus).toBeTruthy();
  })

  
});