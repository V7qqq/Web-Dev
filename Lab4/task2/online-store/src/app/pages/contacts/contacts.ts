import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {ContactsView} from '../../components/contacts-view/contacts-view';

@Component({
  selector: 'app-contacts',
  imports: [Header, Header, ContactsView],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {

}
