import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { authStore } from 'src/app/store';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  client_id = '9b65bc6ac39e41f285a19de19d0fda55';
  redirect_uri = 'http://localhost:4200';
  scope = 'user-read-private user-read-email';
  isLoading = false;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      let fragmentSplit = fragment?.split('&');
      if (fragmentSplit?.length) {
        const temp = fragmentSplit[0];
        const token = temp.split('=')[1];
        if (token) {
          this.isLoading = false;
          authStore.update((state: any) => ({
            ...state,
            user: { userToken: token },
          }));
          localStorage.setItem('spotifyUserToken', token);
          this.router.navigate(['search']);
        } else {
          window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.client_id}&scope=${this.scope}&redirect_uri=${this.redirect_uri}`;
        }
      }
    });
  }

  loginWithSpotify(): void {
    this.isLoading = true;
    window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.client_id}&scope=${this.scope}&redirect_uri=${this.redirect_uri}`;
  }

  registerArtist(): void {
    this.router.navigate(['register']);
  }
}
