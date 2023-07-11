import { AlbumModel } from 'src/app/models/albumModel';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent {
  @Input() album: AlbumModel = new AlbumModel();
  albumImage: any;
  constructor() {}

  ngOnInit(): void {
    if (this.album?.images && this.album.images[0]) {
      this.albumImage = this.album.images[0];
    }
  }

  ngOnChanges(): void {
    if (this.album?.images && this.album.images[0]) {
      this.albumImage = this.album.images[0];
    }
  }
}
