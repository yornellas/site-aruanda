import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Norte } from 'src/app/components/music-collection/norte/norte';
import { PdfModalComponent } from 'src/app/components/music-collection/pdf-modal/pdf-modal.component';
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

  openPdfModal(source: string) {
    const activeModal = this.modalService.open(PdfModalComponent)
    activeModal.componentInstance.pdfSource = source
  }
}
