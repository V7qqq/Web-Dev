import { Routes } from '@angular/router';
import {Home} from '../routes/home/home';
import {About} from '../routes/about/about';
import {AlbumPhoto} from '../routes/album-photo/album-photo';
import {Albums} from '../routes/albums/albums';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'home', component: Albums},
  {path: 'about', component: About},
  {path: 'albums', component: Albums},
  {path: 'albums/:id', component: AlbumPhoto},
];
