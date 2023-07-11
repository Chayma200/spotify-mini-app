import { ArtistModel } from 'src/app/models/artistModel';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
})
export class ArtistCardComponent implements OnInit, OnChanges {
  @Input() artist: ArtistModel = new ArtistModel();
  @Output() artistClicked = new EventEmitter<string>();
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

  onArtistClick(artistName: string): void {
    this.artistClicked.emit(artistName);
  }
}
