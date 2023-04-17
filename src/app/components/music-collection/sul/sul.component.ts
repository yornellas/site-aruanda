import { Component } from '@angular/core';
import { MusicListInterface } from 'src/app/shared/interfaces/music-list.interface';
import { Sul } from './sul';

@Component({
  selector: 'sul',
  templateUrl: './sul.component.html',
  styleUrls: ['./sul.component.scss']
})
export class SulComponent {
  regionalImageSource: string = "../../../../assets/images/regions/sul.svg"
  regionName: string = 'Sul'
  musicList: MusicListInterface[] = Sul
}
