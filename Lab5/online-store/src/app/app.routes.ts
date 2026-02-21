import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { Contacts } from './pages/contacts/contacts';
import { Likes } from './pages/likes/likes';
export const routes: Routes = [
  { path: '', component: Catalog },
  { path: 'contacts', component: Contacts },
  { path: 'likes', component: Likes}
];
