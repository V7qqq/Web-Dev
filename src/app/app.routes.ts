import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { Contacts } from './pages/contacts/contacts';
export const routes: Routes = [
  { path: '', component: Catalog },
  { path: 'contacts', component: Contacts },
];
