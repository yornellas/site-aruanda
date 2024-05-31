import { Component } from '@angular/core';
import { Norte } from './norte';
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
