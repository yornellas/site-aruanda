import { Component, Input } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PdfModalComponent } from 'src/app/shared/pdf-modal/pdf-modal.component';
import { MusicListInterface } from '../interfaces/music-list.interface';

@Component({
  selector: 'regional-music-container',
  templateUrl: './regional-music-container.component.html',
  styleUrls: ['./regional-music-container.component.scss']
})
export class RegionalMusicContainerComponent {
  @Input() imageSource: string
  @Input() regionName: string
  @Input() musicList: MusicListInterface[]
  filePdf = faFilePdf

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
