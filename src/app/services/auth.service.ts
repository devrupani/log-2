import { Injectable } from '@angular/core';
import { UserListService } from './user-list.service';
import { Router } from '@angular/router';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = []
  isRole: string | undefined;
  isLogin: boolean = false;
  isUserFound: boolean = false;
  userRole: boolean | undefined;

  constructor(private userlogin: UserListService, private router: Router) {
    this.users = this.userlogin.users;
  }

  loginClick(username: string, password: string) {
    if (username && password) {
      this.userlogin.users.find((user) => {
        if (user.username === username && user.password === password) {
          this.isLogin = true
          // this.isRole = user.role
          this.isUserFound = true;
          localStorage.setItem("email", username)
          
          const userRole = localStorage.setItem('userRole', user.role)

          const isUserLogin = localStorage.setItem('isLogin', this.isUserFound.toString())

          this.router.navigate(['dashboard'])
        }
      })
    }
    if (!this.isUserFound) {
      this.isLogin = false
      alert("not valid")
    }
  }

}
