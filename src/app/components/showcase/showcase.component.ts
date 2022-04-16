import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
  providers: [NgbCarouselConfig],
})
export class ShowcaseComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  // clicked first value like state and onClick setstate in react
  // clicked = '';
  // onClick(event: any) {
  //   this.clicked = 'The type of Event is ' + event.type;
  // }
  //

  images = [700, 533, 807, 124].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );

  ngOnInit(): void {}
}
