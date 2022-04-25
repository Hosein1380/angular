import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { UserService } from '../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

inputForm:any;

  constructor(private router:Router, private usereservice:UserService) { }

  

  ngOnInit(): void { 
  this.inputForm= new FormGroup({
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)


  });
  }
// navigate to home page & set storage
 public onsubmite(){
   console.log(this.inputForm.value.username);
   console.log(this.usereservice.user.find(user=>user.NAME));
   this.usereservice.user.find(user=>
    {
      if(this.inputForm.value.username==user.NAME){
        localStorage.setItem('user',this.inputForm.value.username);
        localStorage.setItem('pass',this.inputForm.value.password);
        localStorage.setItem('role', user.role!);

      }
    });
  // let object;

  //  object=this.usereservice.user.find(user=>user.NAME);
  // if(this.inputForm.value.username==object?.NAME){
  //   localStorage.setItem('user',this.inputForm.value.username);
  //       localStorage.setItem('pass',this.inputForm.value.password);
  //       localStorage.setItem('role', object.role);
  // }
  //    const role=this.usereservice.role
  //   // localStorage.setItem('role',role)
  //   console.log(this.usereservice.role); 
   
  //  localStorage.setItem('user',this.inputForm.value.username);
  //  localStorage.setItem('pass',this.inputForm.value.password);
  this.router.navigate(['/Home']);
  // console.log(this.inputForm);
  
 }

 

}