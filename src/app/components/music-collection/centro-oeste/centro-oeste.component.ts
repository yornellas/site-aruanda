import { Component } from '@angular/core';
import { MusicListInterface } from 'src/app/shared/interfaces/music-list.interface';
import { CentroOeste } from './centro-oeste';

@Component({
  selector: 'centro-oeste',
  templateUrl: './centro-oeste.component.html',
  styleUrls: ['./centro-oeste.component.scss']
})
export class CentroOesteComponent {
  regionalImageSource: string = "../../../../assets/images/regions/centro-oeste.svg"
  regionName: string = 'Centro-Oeste'
  musicList: MusicListInterface[] = CentroOeste
}
