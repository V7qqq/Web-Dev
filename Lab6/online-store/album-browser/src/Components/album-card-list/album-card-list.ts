import {Component, inject, OnInit, signal} from '@angular/core';
import {Album} from '../../Services/album.model';
import {AlbumService} from '../../Services/album.service';
import {AlbumCard} from '../album-card/album-card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-album-card-list',
  imports: [
    AlbumCard,
    RouterLink
  ],
  templateUrl: './album-card-list.html',
  styleUrl: './album-card-list.css',
})
export class AlbumCardList implements OnInit{
  album = signal<Album[]>([]);
  albumservice:AlbumService = inject(AlbumService);
  fetchAlbums() {
    this.albumservice.getAlbums().subscribe(data => {
      this.album.set(data);
    });
  }
  ngOnInit() {
    this.fetchAlbums();
  }

  deleteAlbum(id: number) {
    this.albumservice.delalbum.update(array => {array.push(id) ; return array;});
  }

  changetext(id:number, oldText:string){
    const textik = prompt("New name of the album", oldText);
    if (textik === null || textik.trim() === "") return;
    this.album.update(albums =>
      albums.map(alb =>
        alb.id === id ? { ...alb, title: textik } : alb
      )
    );

  }
}
