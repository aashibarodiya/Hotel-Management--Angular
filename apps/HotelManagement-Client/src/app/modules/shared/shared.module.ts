import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SearchPipe } from './pipes/pipes';
import { UniqueEmailDirective } from './directives/unique-email.directive';



@NgModule({
  declarations: [
  
    PopUpComponent,
    SearchPipe,
    UniqueEmailDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    PopUpComponent,
    SearchPipe ,
    UniqueEmailDirective
  ]
})
export class SharedModule { }
