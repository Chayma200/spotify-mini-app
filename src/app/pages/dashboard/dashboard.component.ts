import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  errorMessage = 'Search for an artist you want to listen to...';
  albumsRetrieved = false;
  searchVal = '';
  artistName = '';
  artists = [];
  albums = [];
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}
  onSearchValue(event: any): void {
    this.searchVal = event;
    if (event) {
      this.errorMessage = '';
      this.apiService.getAllArtists(event).subscribe({
        next: (response) => {
          if (response?.artists?.items?.length) {
            this.artists = response.artists.items;
          }
        },
        error: () => {
          this.errorMessage = 'Failed to fetch data! Please try again!';
        },
      });
    } else {
      this.errorMessage = 'Search for an artist you want to listen to...';
    }
  }

  onArtistClicked(event: string): void {
    this.artistName = event;
    this.apiService.getArtistAlbums(event).subscribe({
      next: (response) => {
        this.albumsRetrieved = true;
        this.albums = response?.albums?.items || [];
      },
      error: () => {
        this.albumsRetrieved = false;
        this.errorMessage = 'Failed to load albums! Please try again!';
      },
    });
  }

  onBackArrowClick(): void {
    this.albumsRetrieved = false;
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
