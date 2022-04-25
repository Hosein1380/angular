import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { Router,RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NotFoundError } from "rxjs";
import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from "./user/user.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UsersComponent } from "./users/users.component";
import { EdituserComponent } from "./edituser/edituser.component";
import { AdminGuard } from "./admin.guard";


const routes: Routes=[
{path:'',component:LoginComponent},
{path:'Home',component:HomeComponent},
{path:'admin',component:AdminComponent,canActivate:[AdminGuard] },
{path:'user',component:UserComponent},
{path:'edituser',component:EdituserComponent},
{path:'user/:id',component:UsersComponent},
{path:'not-found',component:NotFoundComponent},
{path:'**',redirectTo:'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}

