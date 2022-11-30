import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpUserService } from '../../users/services/http-user-service';
import { InterceptorService } from './interceptor.service';


describe('InterceptorService', () => {
  let service: InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide:"UserService",useClass:HttpUserService}],
      imports:[HttpClientModule]
    });
    service = TestBed.inject(InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
