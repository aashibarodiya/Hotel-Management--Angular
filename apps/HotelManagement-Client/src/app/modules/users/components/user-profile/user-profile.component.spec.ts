import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { AppRoutingModule } from '../../../../app-routing.module';
import { HttpBookingService } from '../../../booking/services/http-booking-service';
import { HttpUserService } from '../../services/http-user-service';

import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports:[HttpClientTestingModule,
        RouterModule,
      AppRoutingModule,
    FormsModule,LoggerTestingModule],
        providers:[{provide:"UserService",useClass:HttpUserService},
        {provide:"BookingService",useClass:HttpBookingService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the title',()=>{
    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toEqual("My Bookings ");
  });

  it('should popup while clicking button',()=>{
    component.handleClick(false);
    expect(component.visible).toBeFalsy();
    fixture.detectChanges();
  });
  
  it('should close when cancel is cliked',()=>{
    component.handleClick(true);
    expect(component.visible).toBeFalsy();
    fixture.detectChanges();
  });
});