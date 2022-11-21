import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpBookingService } from 'src/app/modules/booking/services/http-booking-service';
import { HttpUserService } from '../../services/http-user-service';
import { UserService } from '../../services/user.service';

import { UserProfileComponent } from './user-profile.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { throwError } from 'rxjs';
import { LoggerTestingModule } from 'ngx-logger/testing';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let bookingService:any;
  let el:DebugElement;


  beforeEach( async() => {
     await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports:[HttpClientModule,
        RouterModule,
      AppRoutingModule,
    FormsModule,LoggerTestingModule],
        providers:[
          {provide:"UserService",useClass:HttpUserService },
        {provide:"BookingService",useClass:HttpBookingService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  


  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

it('should check the title', () => {
  
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h3').textContent).toEqual("My Bookings ");
  

});

it('should get popup while clicking button',()=>{
  
  component.handleClick(false); 
  expect(component.visible).toBeFalse();
  fixture.detectChanges();

  // component.handleClick(true); 
  // fixture.detectChanges();

  // component.updateBookings(true); 
  // fixture.detectChanges();


})

it('should close when cancel is clicked',()=>{
  component.handleClick(true); 
  expect(component.visible).toBeFalse();
  fixture.detectChanges();
})












});