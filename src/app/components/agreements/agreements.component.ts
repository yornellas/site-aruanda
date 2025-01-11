import { Component } from '@angular/core';
import { Agreements } from './agreements';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PdfModalComponent } from 'src/app/shared/pdf-modal/pdf-modal.component';

@Component({
  selector: 'app-agreements',
  templateUrl: './agreements.component.html',
  styleUrls: ['./agreements.component.scss']
})
export class AgreementsComponent {
  agreements = Agreements
  filePdf = faFilePdf

  extraDocuments = {
    statute: {
      title: 'ESTATUTO SOCIAL DO GRUPO FOLCLÓRICO ARUANDA',
      pdf: 'https://yornellas.github.io/aruanda-docs/Agreements/ESTATUTO-SOCIAL-DO-GRUPO-FOLCLORICO-ARUANDA.pdf'
    },
    board: {
      title: 'DIRIGENTES DO GRUPO FOLCLÓRICO ARUANDA',
      pdf: 'https://yornellas.github.io/aruanda-docs/Agreements/RelacaoNominaldeDirigentes2021-2025.pdf'
    },
    agreements: {
      title: 'ACORDOS',
      pdf: 'https://yornellas.github.io/aruanda-docs/Agreements/TERMOS-DE-FOMENTO-FUNARTE.pdf'
    }
  }

  constructor(private modalService: NgbModal) {}

  openPdfModal(source: string, title: string) {
    const activeModal = this.modalService.open(PdfModalComponent, {
      backdrop: true,
      size: 'lg',
      windowClass: 'pdf-modal'
    })
    activeModal.componentInstance.pdfSource = source
    activeModal.componentInstance.pdfTitle = title
  }
}
