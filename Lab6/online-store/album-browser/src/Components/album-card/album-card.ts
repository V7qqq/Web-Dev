import {Component, input, Input, output} from '@angular/core';
import EventEmitter = require('node:events');


@Component({
  selector: 'app-album-card',
  imports: [],
  templateUrl: './album-card.html',
  styleUrl: './album-card.css',
})
export class AlbumCard{
  title = input.required<string>();
  id = input.required<number>();
  DeleteEvent = output<number>();
  NameEvent = output<string>();





}
