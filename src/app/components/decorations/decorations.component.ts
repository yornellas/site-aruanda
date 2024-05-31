import { Component } from '@angular/core';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { Decoration } from 'src/app/shared/interfaces';
import { MainDecorations } from './main-decorations';

@Component({
  selector: 'decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.scss']
})
export class DecorationsComponent {
  mainDecorations: Decoration[] = MainDecorations;
  icon = faMedal
}
