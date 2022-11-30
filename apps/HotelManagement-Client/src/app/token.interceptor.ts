import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './modules/users/services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    @Inject("UserService") private userService: UserService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);

    let headers = this.userService.getAuthenticationHeader();
    let modifiedRequest = request.clone({
      setHeaders:{
        ...headers
      }
    })
    
    return next.handle(modifiedRequest);
  }
}
