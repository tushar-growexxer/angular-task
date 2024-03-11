import {Contact} from "../Models/contact.model";

export class ContactService{
  contactList:Contact[] = [
    {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john@example.com',
      gender: 'Male',
      birthDate: new Date('1990-01-01'),
    },
    {
      name: 'Jane Smith',
      phone: '987-654-3210',
      email: 'jane@example.com',
      gender: 'Female',
      birthDate: new Date('1995-05-15'),
    },
  ]

  getContacts(){
    return this.contactList;
  }

  delete(index: number) {
    if(confirm("Are you sure to delete")){
      this.contactList.splice(index,1);
    }
  }

}
