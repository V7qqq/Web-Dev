import {Component, inject, Input} from '@angular/core';


@Component({
  selector: 'app-photo-card',
  imports: [],
  templateUrl: './photo-card.html',
  styleUrl: './photo-card.css',
})
export class PhotoCard {
  @Input() id!: number;
  @Input() title: String = '';


}
