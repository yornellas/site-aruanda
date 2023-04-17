import { Component } from '@angular/core';
import { MusicListInterface } from 'src/app/shared/interfaces/music-list.interface';
import { Nordeste } from './nordeste';

@Component({
  selector: 'nordeste',
  templateUrl: './nordeste.component.html',
  styleUrls: ['./nordeste.component.scss']
})
export class NordesteComponent {
  regionalImageSource: string = "../../../../assets/images/regions/nordeste.svg"
  regionName: string = 'Nordeste'
  musicList: MusicListInterface[] = Nordeste
}
