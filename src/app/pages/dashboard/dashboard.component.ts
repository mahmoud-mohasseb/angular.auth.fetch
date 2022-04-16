import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  li: any;
  results: any;
  themovies: any;
  lis = [];
  constructor(public authService: AuthService, private http: HttpClient) {
    this.themovies;
  }
  imageSrc = 'https://image.tmdb.org/t/p/w1280';
  ngOnInit(): void {
    this.http
      .get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=e99920e243cbf39e20dddcbb5ff297ee'
      )
      .subscribe((Response) => {
        // If response comes hideloader() function is called
        // to hide that loader
        // if (Response) {
        //   console.log(Response);

        //   hideloader();
        // }
        console.log(Response);
        this.themovies = Response;
        this.li = Response;
        // this.lis = this.li.list;
      });

    // function hideloader() {
    //   document.getElementById('loading').style.display = 'none';}
    // }
  }
}
