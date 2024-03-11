import {NgModule} from "@angular/core";
import {ContactsComponent} from "./contacts.component";
import {AgePipe} from "../age.pipe";
import {GenderDirective} from "../gender.directive";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ContactService} from "../Services/contact.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations:[
    ContactsComponent,
    AgePipe,
    GenderDirective
  ],
  imports:[
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:ContactsComponent}
    ])
  ],
  providers:[ContactService]
})
export class ContactModule{

}
