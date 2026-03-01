import { Component } from '@angular/core';
import {AlbumCardList} from '../../Components/album-card-list/album-card-list';

@Component({
  selector: 'app-albums',
  imports: [
    AlbumCardList
  ],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums {

}
