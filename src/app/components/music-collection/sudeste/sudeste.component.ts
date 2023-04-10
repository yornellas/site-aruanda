import { Component } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'sudeste',
  templateUrl: './sudeste.component.html',
  styleUrls: ['./sudeste.component.scss']
})
export class SudesteComponent {
  items = [1,2,3,4,5,6,7,8,9,10]
  filePdf = faFilePdf

  //links pra passar pro componente do pdf
  //links pra passar pra url do soundhound

  openPdfModal(index: number) {
    //index ou o item como parametro?
  }
}
