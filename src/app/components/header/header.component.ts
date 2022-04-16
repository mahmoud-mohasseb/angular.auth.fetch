import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faSearch,
  faContactBook,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  faHome = faHome;
  faSearch = faSearch;
  faContactBook = faContactBook;
  faArrowCircleRight = faArrowCircleRight;
  logos =
    'https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium';

  public isMenuCollapsed = true;

  ngOnInit(): void {}
}
