import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { HttpUserService } from '../../services/http-user-service';

import { MembershipComponent } from './membership.component';

describe('MembershipComponent', () => {
  let component: MembershipComponent;
  let fixture: ComponentFixture<MembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipComponent ],
      imports:[HttpClientModule, LoggerTestingModule],
      providers:[{provide:"UserService",useClass:HttpUserService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update user status',()=>{
    component.updateUserStatus(true);
    expect(component.updateUserStatus).toBeTruthy();
  });
  
});