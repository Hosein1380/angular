import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import{IUser} from '../interfaces/app-interfaces'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   users: IUser[] | undefined; 

  constructor(private userservice:UserService) { }

  ngOnInit(): void {

    this.users=this.userservice.user;
console.log(this.users);
  }

}
