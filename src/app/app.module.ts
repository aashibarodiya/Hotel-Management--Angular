import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpUserService } from './modules/users/services/http-user-service';

import { CoreModule } from './modules/core/core.module';
import { HttpBookingService } from './modules/booking/services/http-booking-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BookingModule } from './modules/booking/booking.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { InterceptorService } from './modules/core/interceptors/interceptor.service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from 'src/environments/environment';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule ,
    FormsModule,
    ReactiveFormsModule,
    BookingModule,
    LoggerModule.forRoot(
     environment.logging)
    
  ],
  declarations: [
    AppComponent,

         ],
         
  providers: [
    {provide:"UserService",useClass:HttpUserService},
    {provide:"BookingService",useClass:HttpBookingService},
    {provide: HTTP_INTERCEPTORS,useClass:InterceptorService,multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }