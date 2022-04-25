import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../interfaces/app-interfaces';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user:IUser|undefined;

  constructor(private useservice:UserService, private route:ActivatedRoute) { }

  ngOnInit(): void {

this.user=this.useservice.user.find(user=>user.id===+this.route.snapshot.params['id']);

  }
public edit(name: string, id: string,email: string, password: string){
  console.log(name);
  console.log(id);
  console.log(email);
  console.log(password);
}
}
