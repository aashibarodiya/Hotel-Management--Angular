import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RoomBookingComponent } from './components/room-booking/room-booking.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpUserService } from './services/http-user-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MembershipComponent } from './components/membership/membership.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';


/**
 * The default module or root module of our project
 */
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MembershipComponent,
    UserProfileComponent
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule ,
    SharedModule
    
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    MembershipComponent,
    UserProfileComponent


  ]
})
export class UsersModule { }
