import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
  @Input() cssStyle: string

  arrowLeft = faArrowLeft

  constructor(private location: Location){}

  goBack(): void {
    this.location.back()
  }
}
