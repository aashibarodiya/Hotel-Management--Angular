import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/users/services/user.service';

@Component({
  selector: 'membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})


export class MembershipComponent implements OnInit {

  user?:any;  

  constructor(@Inject("UserService")private userService: UserService, private router:Router) { }  
 // This is helper method sets the logged-in user
  updateUserStatus(details:any): void {
    
    if(details)
      this.user=details.user;
    else
      this.user=undefined;

  }

  //This method intializes the membership component
  ngOnInit(): void {
    
      console.log('membership component initialized');
      var details= this.userService.getLoggedInUser();
      if(details)
        this.user=details.user;
      this
        .userService
        .getUserStatusAnnouncement()
        .subscribe(details=>this.updateUserStatus(details))      
  }
 
  // This method unsubscribe 
  ngOnDestroy(): void {
   
    this.userService.getUserStatusAnnouncement().unsubscribe();
  }

  // This method handle logged-out of the user and navigate to the login page
  async handleLogout(){
    await this.userService.logOut();
  this.router.navigate(['user/login'])
  }

  
}
