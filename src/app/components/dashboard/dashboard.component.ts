import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

role : string | undefined;
isLogin : boolean =false;

  constructor(private userlist : UserListService,private authservice : AuthService,private route : Router){
    this.role = authservice.isRole;
    this.isLogin = authservice.isLogin;
  } 
  
  logout(){
   console.log(`effefefwe`);
   this.route.navigate(['login'])
   localStorage.removeItem("email")
   
  }
}
