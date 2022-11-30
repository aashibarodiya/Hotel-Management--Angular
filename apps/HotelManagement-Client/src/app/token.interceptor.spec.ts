import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpUserService } from '../app/modules/users/services/http-user-service';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptor,
      {provide:"UserService",useClass:HttpUserService}
      ],
      
      imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
