import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faCoffee = faCoffee;

  scrollToFooter() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
