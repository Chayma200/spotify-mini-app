import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  errorMessage = 'Search for an artist you want to listen to...';
  artists = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
  onSearchValue(event: any): void {
    if (event) {
      this.errorMessage = '';
      this.apiService.getAllArtists(event).subscribe({
        next: (response) => {
          console.log('res', response);
          if (response?.artists?.items?.length) {
            this.artists = response.artists.items;
          }
        },
        error: (err) => {
          this.errorMessage = 'Failed to fetch data! Please try again!';
        },
      });
    }
  }
}
