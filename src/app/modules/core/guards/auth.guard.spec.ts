import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpUserService } from '../../users/services/http-user-service';
import { AuthGuard } from './auth.guard';
import { LoggerTestingModule } from 'ngx-logger/testing';



describe('AuthGuard', () => {

  let guard: AuthGuard;



  beforeEach(() => {

    TestBed.configureTestingModule({

      imports:[HttpClientModule,LoggerTestingModule],

      providers:[{

        provide:"UserService",useClass:HttpUserService

      }]

    });

    guard = TestBed.inject(AuthGuard);

  });



  it('should be created', () => {

    expect(guard).toBeTruthy();

  });



});