import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'pdf-modal',
  templateUrl: './pdf-modal.component.html',
  styleUrls: ['./pdf-modal.component.scss']
})
export class PdfModalComponent {
  @Input() pdfSource: string
  iconClose = faXmark
  
  constructor(private modalService: NgbModal) {}

  closeModal() {
    this.modalService.dismissAll()
  }
}
