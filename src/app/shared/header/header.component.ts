import { Component, Input } from '@angular/core';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showHeaderLogo: boolean = false

  scrollToAboutUsSection() {
    window.scrollTo(0, document.body.scrollHeight * 0.4113);
  }
  
  scrollToFooter() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
