import { Component } from '@angular/core';
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
