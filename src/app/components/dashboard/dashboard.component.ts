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
export class DashboardComponent implements OnInit {

role : string | undefined;
isLogin : boolean =false;
userRole: any;
isUserLogin : string | boolean | undefined | null;

  constructor(private userlist : UserListService,private authservice : AuthService,private route : Router){
    this.role = authservice.isRole;
    // localStorage.setItem("role",this.role)
    // console.log(this.role);
    
    this.isLogin = authservice.isLogin;
  } 


  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole');
    this.isUserLogin = localStorage.getItem('isLogin')
  }
  
  logout(){
   console.log(`effefefwe`);
   this.route.navigate(['login'])
   localStorage.removeItem("email")
   
  }
}
