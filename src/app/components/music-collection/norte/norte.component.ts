import { Component } from '@angular/core';
import { Norte } from './norte';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PdfModalComponent } from '../pdf-modal/pdf-modal.component';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { MusicListInterface } from 'src/app/shared/interfaces/music-list.interface';


@Component({
  selector: 'norte',
  templateUrl: './norte.component.html',
  styleUrls: ['./norte.component.scss']
})
export class NorteComponent {
  regionalImageSource: string = "../../../../assets/images/regions/norte.svg"
  regionName: string = 'Norte'
  musicList: MusicListInterface[] = Norte
}
