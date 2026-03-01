import {Component, inject, Input, OnInit, signal} from '@angular/core';
import {AlbumService} from '../../Services/album.service';
import {Photo} from '../../Services/album.model';
import {ActivatedRoute} from '@angular/router';
import {PhotoCard} from '../../Components/photo-card/photo-card';

@Component({
  selector: 'app-album-photo',
  imports: [PhotoCard],
  standalone: true,
  templateUrl: './album-photo.html',
  styleUrl: './album-photo.css',
})
export class AlbumPhoto implements OnInit{
  Id !: string;
  photo = signal<Photo[]>([]);
  albumService:AlbumService = inject(AlbumService);

  fetchAlbums() {
    this.albumService.getAlbumPhotos(Number(this.Id)).subscribe(data => {
      this.photo.set(data);
    });
  }
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id')!;
      this.fetchAlbums();
    });
  }





}
