import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { LoggedInDetails, LoginInfo, User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
  constructor(
    @Inject("UserService") private userService: UserService,
    private router: Router
  ) { }

  loginInfo:LoginInfo={
    email: '',
    password:''
  };  

  loggedInUser?:User;

  status?:string;
  statusStyle?:string;

   handleLogin(){
    

        (<Observable<LoggedInDetails>>(this.userService
        .login(this.loginInfo)))
        .subscribe({
          next: (info:LoggedInDetails)=>{ 
            console.log(info);
            const user=info.user;
            console.log('user',user);
            console.log(this.status);
            this.status=`Welcome ${user.name}`;
            console.log(this.status);
            this.statusStyle='text-success';
            this.router.navigate(['home']);
          },
          error: (error:any)=>{
         
            this.status=`Error: ${error.status}`;
            this.statusStyle='text-danger';
          }
        });

        this.status='please wait...';
        this.statusStyle='text-primary'; 
        

  }

  ngOnInit(): void {
    //localStorage.setItem("token",this.loggedInUser!.email);
  }

}
