import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';

import { UsersModule } from '../users/users.module';
import { RouterModule } from '@angular/router';


/**
 * The default module or root module of our project
 */
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersModule,
    RouterModule
  
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ]
})
export class CoreModule { }