import { Component } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PdfModalComponent } from '../pdf-modal/pdf-modal.component';
import { MusicListInterface } from 'src/app/shared/interfaces/music-list.interface';
import { Sudeste } from './sudeste';


@Component({
  selector: 'sudeste',
  templateUrl: './sudeste.component.html',
  styleUrls: ['./sudeste.component.scss']
})
export class SudesteComponent {
  regionalImageSource: string = "../../../../assets/images/regions/sudeste.svg"
  regionName: string = 'Sudeste'
  musicList: MusicListInterface[] = Sudeste
}
