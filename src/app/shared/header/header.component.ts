import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuCollapsed = false
  barsIcon = faBars
  closeIcon = faXmark

  constructor(private router: Router) {}

  redirectToMainPage() {
    this.router.navigate(['/pagina-inicial'])
    this.scrollToTop()
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  scrollToFooter() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
