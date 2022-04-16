import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import {
  faHome,
  faSearch,
  faContactBook,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    public authService: AuthService
  ) {}
  closeResult = '';
  faHome = faHome;
  faSearch = faSearch;
  faContactBook = faContactBook;
  faArrowCircleRight = faArrowCircleRight;
  myDate = Date.now();

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    // .result.then(
    //   (result) => {
    //     this.closeResult = `Closed with: ${result}`;
    //   },
    //   (reason) => {
    //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   }
    // );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {}
}
