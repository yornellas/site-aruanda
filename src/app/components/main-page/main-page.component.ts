import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  chevronDown = faChevronDown

  scrollToAboutUsSection() {
    window.scrollTo(0, document.body.scrollHeight * 0.4113);
  }
}
