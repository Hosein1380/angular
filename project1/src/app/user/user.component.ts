import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { IUser } from '../interfaces/app-interfaces';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit {
  users: IUser[] | undefined;

  constructor(private route:ActivatedRoute,
    private userservice: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.users=this.userservice.user; 
    if (!this.users) {
      this.router.navigate(['/user']);
    }
    console.log(this.users);
    
  }

}
