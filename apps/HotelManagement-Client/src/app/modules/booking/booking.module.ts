import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomBookingComponent } from './components/room-booking/room-booking.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { UsersModule } from '../users/users.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    RoomBookingComponent,
    GalleryComponent
  ],
  exports:[
   GalleryComponent ,
   RoomBookingComponent,
   FormsModule,
   ReactiveFormsModule
  ]
})
export class BookingModule { }
