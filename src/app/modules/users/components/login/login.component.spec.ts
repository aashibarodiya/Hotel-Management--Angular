import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { elementAt } from 'rxjs';
import { LoginComponent } from './login.component';
import { HttpUserService } from '../../services/http-user-service';
import { LoggerTestingModule } from 'ngx-logger/testing';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
 let el:DebugElement;
 let userService:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ,],
      imports:[HttpClientModule, FormsModule, RouterModule],
      providers:[{
        provide:"UserService",useValue:HttpUserService
      }]
     
    })
    .compileComponents();

  fixture = TestBed.createComponent(LoginComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  
  });
 

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });


});