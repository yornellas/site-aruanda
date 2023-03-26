import { Component, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showHeaderLogo: boolean = false
  faCoffee = faCoffee;

  scrollToAboutUsSection() {
    window.scrollTo(0, (document.body.scrollHeight/2));
  }
  
  scrollToFooter() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
