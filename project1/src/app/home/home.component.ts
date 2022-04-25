import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../interfaces/app-interfaces';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// users:IUser[]|undefined;

  constructor(private userservice:UserService, private router:Router) { }

  ngOnInit(): void {

    // this.users=this.userservice.user;
  }
logout(){
localStorage.clear();
this.router.navigate(['']);

}



}
