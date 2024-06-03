import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  searchTerm: string = '';

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  searchContacts(): void {
    const term = this.searchTerm.toLowerCase();
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(term) ||
        contact.phone.includes(term) ||
        contact.email.toLowerCase().includes(term) ||
        contact.address.toLowerCase().includes(term)
      );
    });
  }
}
