import { Component } from '@angular/core';
import {ContactService} from "../Services/contact.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  constructor(private contactService:ContactService) {
  }

  contactList = this.contactService.getContacts();
  editIndex:number|null = null;

  onDelete(index: number) {
    this.contactService.delete(index)
  }

  onEdit(index: number) {
    this.editIndex = index;
  }

  onUpdate() {
    this.editIndex = null
    // console.log(this.contactList[index]);
  }
}
