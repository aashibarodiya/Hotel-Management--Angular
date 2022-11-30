import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should have title as Awesome Hotel',(()=>{
  const fixture=TestBed.createComponent(HeaderComponent);
  const app=fixture.debugElement.componentInstance;
  expect(app.title).toEqual('HotelManagement-Client')
}))

});