import { HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { LoggerTestingModule } from "ngx-logger/testing";
import { throwError } from "rxjs";
import { dummyUser, loggedIn, login } from "src/app/mock-data/db-data";
import { HttpUserService } from "./http-user-service";
import { UserService } from "./user.service";
const url='https://localhost:7066/api/users'

describe('UsersService',()=>{
    let httpTestingController: HttpTestingController;
    let service:UserService;
  beforeEach(()=>{
          TestBed.configureTestingModule({
          imports:[HttpClientTestingModule,LoggerTestingModule],
          providers:[{provide:"UserService",useClass:HttpUserService}]
      })
      httpTestingController=TestBed.get(HttpTestingController);
    service=TestBed.get('UserService');
  });

  it('should handle error for status code 0',()=>

  {
    var error:any = new HttpErrorResponse({status:0});
    
    

  });

  it('should register user',()=>{
    service.register(dummyUser)
    .subscribe(user=>{
        expect(user).toBeTruthy();
        expect(user.email).toBe(dummyUser.email);

    })
    const req = httpTestingController.expectOne(`${url}`);
    expect(req.request.method).toEqual("POST");
    req.flush(dummyUser);
 })
  it('should get the logged in email',()=>{
     service.isEmailRegistered(login.email)
     .subscribe(result=>{
    expect(result).toBeTrue();

     })
     const req = httpTestingController.expectOne(`${url}/validate/${login.email}`);
        expect(req.request.method).toEqual("GET");
         req.flush(login);
  })

  it('should login user',()=>{
     service.login(login)
     .subscribe(loggedInDetails=>{
         expect(loggedInDetails).toBeTruthy();
         expect(loggedInDetails.user.email).toBe(loggedIn.user.email);
     })
     const req=httpTestingController.expectOne(`${url}/login`);
     expect(req.request.method).toEqual("POST");
     req.flush(loggedIn);
  })



it('should return nothing on logout',()=>{
  service.logOut().subscribe()
})




  afterEach(() => {
    httpTestingController.verify();
});
})