import { Component, ElementRef, Input, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showHeaderLogo: boolean = false

  scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  scrollToFooter() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
