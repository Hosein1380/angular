import { Injectable } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { IUser } from './interfaces/app-interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  role(arg0: string, role: any) {
    throw new Error('Method not implemented.');
  }
public user:IUser[] = [
{id:1 ,NAME:'user1',PASSWORD:123,email:'user1@gmaim.com',role:'admin'},
{id:2, NAME:'user2',PASSWORD:1234,email:'user2@gmaim.com',role:'user'},
{id:3, NAME:'user3',PASSWORD:12345,email:'user3@gmaim.com',role:'user'}
];



  constructor() { }
}
