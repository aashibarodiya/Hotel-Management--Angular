import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el:DebugElement;
  let userService:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[
        LoggerTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain header,footer',()=>{
    expect(HeaderComponent).toBeTruthy();
    expect(FooterComponent).toBeTruthy();
  })

  it('text should contain Hello world',()=>{
  const app=fixture.debugElement.componentInstance;
    
    expect(app.text).toBe("Hello World");
  })

});