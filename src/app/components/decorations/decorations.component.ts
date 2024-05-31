import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

import { Decoration } from 'src/app/shared/interfaces';
import { MainDecorations } from './main-decorations';
import { PdfModalComponent } from 'src/app/shared/pdf-modal/pdf-modal.component';

@Component({
  selector: 'decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.scss']
})
export class DecorationsComponent {
  mainDecorations: Decoration[] = MainDecorations;
  icon = faMedal

  constructor(private modalService: NgbModal) {}

  openPdfModal(url: string, title: string): void {
    const { componentInstance } = this.modalService.open(PdfModalComponent, {
      backdrop: true,
      size: 'lg',
    })
    componentInstance.pdfSource = url
    componentInstance.pdfTitle = title
  }
}
