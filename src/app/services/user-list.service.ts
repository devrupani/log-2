import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }

  users : User[] = [
    {username : "dev@gmail.com",password : "123456789",role : 'admin'},
    {username : "abc@gmail.com",password : "123456789",role : 'user'},
    {username : "new@gmail.com",password : "123456789",role : 'admin'}
  ]

}
