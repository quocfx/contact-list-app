import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Observable<Contact[]> {
    return of(CONTACTS);
  }

  getContact(id: number): Observable<Contact> {
    const contact = CONTACTS.find(c => c.id === id)!;
    return of(contact);
  }
}
