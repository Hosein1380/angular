import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IUser } from '../interfaces/app-interfaces';
import { UserService } from '../user.service';



@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

user:IUser | undefined; 

  constructor(private userservice:UserService, private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.user=this.userservice.user.find(user=>user.id===+this.route.snapshot.params['id'])
  
    if(!this.user){
this.router.navigate(['user'])

    }
  }

}
