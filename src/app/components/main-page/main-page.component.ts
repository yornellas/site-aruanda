import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild("about", {read: ElementRef, static: true}) aboutRef: ElementRef | undefined;
  chevronDown = faChevronDown
  
  ngOnInit(): void {
    //acionar funçao pra mexer as fitas
  }
  
  scrollToAboutUsSection() {
    this.aboutRef?.nativeElement.scrollIntoView();
  }
}
