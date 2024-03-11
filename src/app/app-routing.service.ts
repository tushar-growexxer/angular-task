import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";

const appRoutes:Routes = [
  {path:'',redirectTo:'/contacts',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'contacts',loadChildren: () => import('./contacts/contact.module').then(m=>m.ContactModule),canActivate:[AuthGuard]}
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingService{

}
