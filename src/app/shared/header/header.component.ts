import { Component, ElementRef, Input, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showHeaderLogo: boolean = false

  //menu mobile:
  // <i class="fa-regular fa-bars"></i>
  // <i class="fa-solid fa-xmark"></i>
  
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  scrollToFooter() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
