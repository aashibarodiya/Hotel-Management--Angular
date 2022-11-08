import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomBookingComponent } from './components/room-booking/room-booking.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    RoomBookingComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
