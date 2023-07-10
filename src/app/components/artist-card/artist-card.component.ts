import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
} from '@angular/core';
import { ArtistModel } from 'src/app/models/artistModel';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
})
export class ArtistCardComponent implements OnInit, OnChanges {
  @Input() artist: ArtistModel = new ArtistModel();
  artistImage: { width: number; height: number; url: string } = {
    width: 640,
    height: 640,
    url: '',
  };
  constructor() {}

  ngOnInit(): void {
    if (this.artist?.images && this.artist.images[0]) {
      this.artistImage = this.artist.images[0];
    }
  }

  ngOnChanges(): void {
    if (this.artist?.images && this.artist.images[0]) {
      this.artistImage = this.artist.images[0];
    }
  }
}
