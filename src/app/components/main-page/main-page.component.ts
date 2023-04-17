import { Component, ElementRef, ViewChild } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @ViewChild("intro", {read: ElementRef, static: true}) aboutRef: ElementRef | undefined;
  chevronDown = faChevronDown
  
  scrollToIntroTextSection() {
    this.aboutRef?.nativeElement.scrollIntoView();
  }
}
