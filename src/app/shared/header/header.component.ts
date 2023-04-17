import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuCollapsed = true
  barsIcon = faBars
  closeIcon = faXmark

  constructor(private router: Router) {}

  redirectTo(page) {
    this.isMenuCollapsed = true
    this.router.navigate([page])
    this.scrollToTop()
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  scrollToFooter() {
    this.isMenuCollapsed = true
    window.scrollTo(0, document.body.scrollHeight);
  }
}
