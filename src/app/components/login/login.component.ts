import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = []

  myLoginform!: FormGroup;
  constructor(private router: Router, private userlist: UserListService,private authservice : AuthService) {
    this.users = this.userlist.users;
    console.log(this.users);

  }

  ngOnInit() {
    this.myLoginform = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])

    })

  }

  registerPage() {
    this.router.navigate(['/register'])
  }

  onSubmit() {
    this.authservice.loginClick(this.myLoginform.value.username,this.myLoginform.value.password);
  }
}
